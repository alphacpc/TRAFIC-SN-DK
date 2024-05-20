pip install apache-airflow
pip install confluent-kafka

from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from confluent_kafka import Producer

# Configuration de Kafka
kafka_config = {
    'bootstrap.servers': 'localhost:9092'  # Remplacez par l'adresse de votre serveur Kafka
}

def send_to_kafka(**kwargs):
    producer = Producer(kafka_config)
    topic = 'your_topic'  # Remplacez par votre topic Kafka

    # Exemple de données à envoyer
    data = "Hello, Kafka from Airflow!"

    # Envoi du message à Kafka
    producer.produce(topic, value=data)
    producer.flush()

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
    'send_to_kafka_dag',
    default_args=default_args,
    description='DAG pour envoyer des données à Kafka',
    schedule_interval=timedelta(days=1),
)

# Définir la tâche qui envoie les données à Kafka
send_to_kafka_task = PythonOperator(
    task_id='send_to_kafka_task',
    python_callable=send_to_kafka,
    provide_context=True,
    dag=dag,
)

send_to_kafka_task
