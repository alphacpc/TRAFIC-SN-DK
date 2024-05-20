from pyspark.sql import SparkSession
from pyspark.sql.functions import *
from pyspark.sql.types import StringType
from elasticsearch import Elasticsearch
from google.cloud import bigquery
import json

# Créer une session Spark
spark = SparkSession.builder \
    .appName("KafkaToElasticsearchAndBigQuery") \
    .config("spark.jars.packages", "org.apache.spark:spark-sql-kafka-0-10_2.12:3.1.2,org.elasticsearch:elasticsearch-spark-30_2.12:7.10.1") \
    .getOrCreate()

# Configuration Kafka
kafka_bootstrap_servers = "localhost:9092"
kafka_topic = "your_topic"

# Lire les données de Kafka
df_kafka = spark.readStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", kafka_bootstrap_servers) \
    .option("subscribe", kafka_topic) \
    .load()

# Convertir les données de Kafka
df_kafka = df_kafka.selectExpr("CAST(value AS STRING)")

# Transformer les données (par exemple, parsing JSON)
schema = spark.read.json(df_kafka.rdd.map(lambda row: row.value)).schema
df_parsed = df_kafka.select(from_json(col("value"), schema).alias("data")).select("data.*")

# Écrire les données dans Elasticsearch
es_write_conf = {
    "es.nodes": "localhost",
    "es.port": "9200",
    "es.resource": "your_index/_doc",
    "es.input.json": "true"
}

df_parsed.writeStream \
    .format("org.elasticsearch.spark.sql") \
    .options(**es_write_conf) \
    .start()

# Écrire les données dans BigQuery
df_parsed.writeStream \
    .foreachBatch(lambda df, epoch_id: df.write \
        .format("bigquery") \
        .option("temporaryGcsBucket", "your-gcs-bucket") \
        .option("table", "your-project.your_dataset.your_table") \
        .mode("append") \
        .save()) \
    .start()

# Agrégations des données
df_aggregated = df_parsed.groupBy("your_column").count()

# Écrire les agrégations dans BigQuery
df_aggregated.writeStream \
    .foreachBatch(lambda df, epoch_id: df.write \
        .format("bigquery") \
        .option("temporaryGcsBucket", "your-gcs-bucket") \
        .option("table", "your-project.your_dataset.aggregated_table") \
        .mode("append") \
        .save()) \
    .start() \
    .awaitTermination()
