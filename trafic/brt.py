import random
from time import sleep
from pprint import pprint
from datetime import datetime


BRT_TARIF = [400, 500]
BRT_DIRECTION = ["Aller ville", "Retour banlieue"]
BRT_CHECKPOINT = [ "Gare de Petersen", "allees Pape Guéye Fall", "Boulevard general de Gaulle",
        "Place de l’obelisque", "Boulevard Dial Diop", "College sacre cœur", "Rond-point liberte 6",
        "Grand Yoff", "Echangeur Aliou Sow", "Parcelles assainies", "Fadia", "Camberene", "Hopital Dalal Jaam",
        "Prefecture de Guediawaye"]


while True:
           
        current_datetime = datetime.now()
        day = current_datetime.strftime("%d/%m/%Y")
        time = current_datetime.strftime("%H:%M:%S")
        
        brt_tarif = random.choice(BRT_TARIF)
        brt_direction = random.choice(BRT_DIRECTION)
        brt_checkpoint = random.choice(BRT_CHECKPOINT)
                
        pprint({
              "id" : f"{current_datetime}-{brt_direction}-{str(brt_tarif)}-{brt_checkpoint}",
              "datetime": str(current_datetime),
              "date": day,
              "time": time,
              "direction" : brt_direction,
              "price" : brt_tarif,
              "checkpoint" : brt_checkpoint
        })
        
        sleep(0.5)