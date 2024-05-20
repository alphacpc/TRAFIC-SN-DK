import random
from time import sleep
from pprint import pprint
from datetime import datetime


TER_PAY = ["Espece", "Carte voyage", "Carte abonnement"]
TER_ZONE = [
        {"zone": "Zone1", "price" : 500},
        {"zone": "Zone2", "price" : 1000},
        {"zone": "Zone3", "price" : 1500},
        {"zone": "Zone0", "price" : 2500},
]
TER_CHECKPOINT = ["Dakar", "Colobane", "Hann", "Beaux Maraichers", 
                        "Pikine", "Thiaroye", "Yeumbeul", "Keur Massar", 
                        "Keur Mbaye Fall", "Rufisque", "Bargny", "Diamniadio"
]



while True:
           
        current_datetime = datetime.now()
        ter_pay = random.choice(TER_PAY)
        ter_zone = random.choice(TER_ZONE)
        ter_checkpoint = random.choice(TER_CHECKPOINT)
                
        pprint({
              "id" : f"{current_datetime}-{ter_zone['zone']}-{str(ter_zone['price'])}-{ter_pay}-{ter_checkpoint}",
              "datetime": str(current_datetime),
              "date": current_datetime.strftime("%d/%m/%Y"),
              "time": current_datetime.strftime("%H:%M:%S"),
              "zone" : ter_zone["zone"],  
              "price" : ter_zone["price"],  
              "checkpoint" : ter_checkpoint,  
              "pay" : ter_pay,  
        })
        
        sleep(0.5)