from kafka import KafkaConsumer
from kafka import TopicPartition

consumer = KafkaConsumer(bootstrap_servers='localhost:1234')
consumer.assign([TopicPartition('foobar', 2)])

msg = next(consumer)
# consumer = KafkaConsumer('my_favorite_topic', group_id='my_favorite_group')
# for msg in consumer:
#     print (msg)

from kafka import KafkaProducer
producer = KafkaProducer(bootstrap_servers='localhost:1234')
for _ in range(100):
    producer.send('foobar', b'some_message_bytes')