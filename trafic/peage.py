import random
from time import sleep
from pprint import pprint
from datetime import datetime

PEAGE_PAY = ["RAPIDO", "Espece"]
PEAGE_TAG = ["entrant", "sortant"]
PEAGE_CHECKPOINT = ["pikine", "poste thiaroye", "cap biche"]
PEAGE_CATEG = [
        {"categ": "C1", "label": "Moto", "price": 400},
        {"categ": "C2", "label": "Vehicule particulier", "price": 500},
        {"categ": "C3", "label": "Camionnette", "price": 800},
        {"categ": "C4", "label": "Car", "price": 1000},
        {"categ": "C5", "label": "Poids lourd", "price": 1000},
]


while True:
        peage_categ = random.choice(PEAGE_CATEG)
        peage_tag = random.choice(PEAGE_TAG)
        peage_pay = random.choice(PEAGE_PAY)
        peage_checkpoint = random.choice(PEAGE_CHECKPOINT)
        
        current_datetime = datetime.now()
        day = current_datetime.strftime("%d/%m/%Y")
        time = current_datetime.strftime("%H:%M:%S")
        
        ID = f"{current_datetime}-{peage_categ['categ']}-{peage_categ['label']}-{str(peage_categ['price'])}-{peage_tag}"
        
        pprint({
                "id" : ID,
                "datetime": str(current_datetime),
                "date" : day,
                "time" : time,
                "category" : peage_categ["categ"],
                "label" : peage_categ["label"],
                "price" : peage_categ["price"],
                "checkpoint" : peage_checkpoint,
                "pay" : peage_pay,
                "tag" : peage_tag
        })
        
        sleep(0.5)
        