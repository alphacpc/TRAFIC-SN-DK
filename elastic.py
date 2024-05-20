from datetime import datetime, timedelta
import time
import json
from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from confluent_kafka import Producer, Consumer, KafkaException
from elasticsearch import Elasticsearch

# Configuration de Kafka
kafka_producer_config = {
    'bootstrap.servers': 'localhost:9092'  # Remplacez par l'adresse de votre serveur Kafka
}

kafka_consumer_config = {
    'bootstrap.servers': 'localhost:9092',  # Remplacez par l'adresse de votre serveur Kafka
    'group.id': 'my_group',
    'auto.offset.reset': 'earliest'
}

# Configuration d'Elasticsearch
es = Elasticsearch([{'host': 'localhost', 'port': 9200}])

def send_to_kafka():
    producer = Producer(kafka_producer_config)
    topic = 'your_topic'  # Remplacez par votre topic Kafka

    for i in range(10):  # Exemple de 10 messages
        data = json.dumps({"message": f"Hello, Kafka from Airflow! {i}"})
        producer.produce(topic, value=data)
        producer.flush()
        print(f"Message sent to Kafka: {data}")
        time.sleep(1)  # Pause de 1 seconde entre les envois pour éviter un flux trop rapide

def read_from_kafka_and_write_to_es():
    consumer = Consumer(kafka_consumer_config)
    topic = 'your_topic'  # Remplacez par votre topic Kafka
    consumer.subscribe([topic])

    while True:
        msg = consumer.poll(timeout=1.0)
        if msg is None:
            continue
        if msg.error():
            if msg.error().code() == KafkaException._PARTITION_EOF:
                continue
            else:
                print(msg.error())
                break
        data = json.loads(msg.value().decode('utf-8'))
        res = es.index(index='your_index', body=data)
        print(f"Message written to Elasticsearch: {res}")

    consumer.close()

# Définir les arguments par défaut du DAG
default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(2023, 1, 1),
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

# Créer le DAG
dag = DAG(
    'kafka_to_es_dag',
    default_args=default_args,
    description='DAG pour envoyer des données à Kafka et les écrire dans Elasticsearch',
    schedule_interval=timedelta(days=1),
)

# Définir les tâches
send_to_kafka_task = PythonOperator(
    task_id='send_to_kafka_task',
    python_callable=send_to_kafka,
    dag=dag,
)

read_from_kafka_and_write_to_es_task = PythonOperator(
    task_id='read_from_kafka_and_write_to_es_task',
    python_callable=read_from_kafka_and_write_to_es,
    dag=dag,
)

send_to_kafka_task >> read_from_kafka_and_write_to_es_task
