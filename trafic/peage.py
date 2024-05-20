import random
from pprint import pprint
from time import sleep

PEAGE_TAG = ["entrant", "sortant"]
PEAGE_PAY = ["RAPIDO", "Espece"]
PEAGE_CHECKPOINT = ["pikine", "poste thiaroye", "cap biche"]
PEAGE_CATEG = [
        {"categ": "C1", "label": "Moto", "price": 400},
        {"categ": "C2", "label": "Vehicule particulier", "price": 500},
        {"categ": "C3", "label": "Camionnette", "price": 800},
        {"categ": "C4", "label": "Car", "price": 1000},
        {"categ": "C5", "label": "Poids lourd", "price": 1000},
]

# categ - label - price - tag - checkpoint - datetime - date - time - datetime_categ_label_price_tag

while True:
        peage_categ = random.choice(PEAGE_CATEG)
        peage_tag = random.choice(PEAGE_TAG)
        peage_pay = random.choice(PEAGE_PAY)
        peage_checkpoint = random.choice(PEAGE_CHECKPOINT)
        
        #id = f"{peage_categ["categ"]} _ {peage_categ["label"]}_{peage_categ["price"]}_{peage_tag}"
        
        pprint({
                "id" : None,
                "category" : peage_categ["categ"],
                "label" : peage_categ["label"],
                "price" : peage_categ["price"],
                "checkpoint" : peage_checkpoint,
                "pay" : peage_pay,
                "tag" : peage_tag
        })
        
        sleep(0.5)
        