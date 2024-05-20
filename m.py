import datetime

# Obtenir la date et l'heure actuelles
current_datetime = datetime.datetime.now()

# Formater la date et l'heure actuelles
formatted_datetime = current_datetime.strftime("%Y-%m-%d %H:%M:%S")

# Afficher la date et l'heure formatées
print("La date et l'heure actuelles formatées sont :", formatted_datetime)

#--------------
current_date = current_datetime.date()
current_time = current_datetime.time()

# Afficher la date et l'heure séparément
print("La date actuelle est :", current_date)
print("L'heure actuelle est :", current_time)

#---------------
# Formater la date et l'heure séparément
formatted_date = current_datetime.strftime("%Y-%m-%d")
formatted_time = current_datetime.strftime("%H:%M:%S")

# Afficher la date et l'heure formatées
print("La date actuelle est :", formatted_date)
print("L'heure actuelle est :", formatted_time)