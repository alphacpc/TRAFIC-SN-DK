from datetime import datetime, timedelta
import time
from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from confluent_kafka import Producer

# Configuration de Kafka
kafka_config = {
    'bootstrap.servers': 'localhost:9092'  # Remplacez par l'adresse de votre serveur Kafka
}

def send_to_kafka_continuous():
    producer = Producer(kafka_config)
    topic = 'your_topic'  # Remplacez par votre topic Kafka

    try:
        while True:
            # Exemple de données à envoyer
            data = "Hello, Kafka from Airflow!"
            producer.produce(topic, value=data)
            producer.flush()
            print(f"Message sent to Kafka: {data}")
            time.sleep(1)  # Pause de 1 seconde entre les envois pour éviter un flux trop rapide
    except KeyboardInterrupt:
        print("Stopped by user")

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
    'send_to_kafka_continuous_dag',
    default_args=default_args,
    description='DAG pour envoyer des données en continu à Kafka',
    schedule_interval=None,  # Pas de planification automatique
)

# Définir la tâche qui envoie les données à Kafka en continu
send_to_kafka_task = PythonOperator(
    task_id='send_to_kafka_continuous_task',
    python_callable=send_to_kafka_continuous,
    dag=dag,
)

send_to_kafka_task
