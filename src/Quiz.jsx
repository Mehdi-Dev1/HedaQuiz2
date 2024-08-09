import React, { useState, useEffect } from 'react';

const questionsData = [
   
  { 
    id: 1, 
    question: "Un bébé né à terme qui doit avoir une exsanguino transfusion à J2 doit être installé :", 
    options: ["En unité de soins intensifs", "En unité kangourou", "En unité de réanimation néonatale", "En unité post-natale standard"], 
    answer: "En unité de réanimation néonatale" 
  },
  { 
    id: 2, 
    question: "Pour un bébé né à terme avec une détresse respiratoire sous lunettes, vous allez l'installer :", 
    options: ["En chambre normale avec surveillance régulière", "En unité de soins intensifs néonatale", "En unité kangourou", "À domicile avec un moniteur"], 
    answer: "En unité de soins intensifs néonatale" 
  },
  { 
    id: 3, 
    question: "Quelle sera la vitesse de gavage pour un nourrisson qui doit recevoir 200 ml en 2 heures ?", 
    options: ["100 ml/h", "150 ml/h", "200 ml/h", "300 ml/h"], 
    answer: "100 ml/h" 
  },
  { 
    id: 4, 
    question: "Pour un gavage de 100 ml en 30 minutes, la vitesse doit être réglée à :", 
    options: ["50 ml/h", "100 ml/h", "150 ml/h", "200 ml/h"], 
    answer: "200 ml/h" 
  },
  { 
    id: 5, 
    question: "Quelle sera la vitesse de gavage pour un nourrisson qui doit recevoir 50 ml en 20 minutes ?", 
    options: ["150 ml/h", "100 ml/h", "200 ml/h", "75 ml/h"], 
    answer: "150 ml/h" 
  },
  { 
    id: 6, 
    question: "Pour un nourrisson qui doit recevoir 210 ml en 3 heures en continu, la vitesse de gavage sera :", 
    options: ["50 ml/h", "70 ml/h", "60 ml/h", "80 ml/h"], 
    answer: "70 ml/h" 
  },
  { 
    id: 7, 
    question: "Lucas est né à 34 semaines avec un poids de 1700g. Son alimentation est mixte avec 8 repas par jour. Quelle est la maturité de Lucas ?", 
    options: ["Prématurité légère", "Prématurité modérée", "Prématurité sévère", "Nouveau-né à terme"], 
    answer: "Prématurité modérée" 
  },
  { 
    id: 8, 
    question: "Pour un nourrisson pesant 2 kg, quel est le débit de la pompe pour une alimentation parentérale de 50 ml en 2 heures ?", 
    options: ["25 ml/h", "50 ml/h", "12,5 ml/h", "75 ml/h"], 
    answer: "25 ml/h" 
  },
  { 
    id: 9, 
    question: "Quel sera le débit de la pompe pour une alimentation entérale de 100 ml en 4 heures ?", 
    options: ["25 ml/h", "50 ml/h", "20 ml/h", "75 ml/h"], 
    answer: "25 ml/h" 
  },
  { 
    id: 10, 
    question: "Si un enfant de 10 kg doit recevoir 6 x 24 ml de lait sur 24 heures en gavage discontinu sur 2 heures, à quel débit réglez-vous la pompe ?", 
    options: ["12 ml/h", "24 ml/h", "36 ml/h", "48 ml/h"], 
    answer: "24 ml/h" 
  },
  { 
    id: 11, 
    question: "Un bébé de 20 jours est en 8 repas à 20 ml/h. Quel est son poids approximatif ?", 
    options: ["1,5 kg", "2 kg", "2,5 kg", "3 kg"], 
    answer: "2 kg" 
  },
  { 
    id: 12, 
    question: "Le Clamoxyl sirop® est dosé à 250 mg/5 ml. Si l'enfant doit recevoir 150 mg, combien de ml allez-vous administrer ?", 
    options: ["1,5 ml", "3 ml", "5 ml", "2,5 ml"], 
    answer: "3 ml" 
  },
  { 
    id: 13, 
    question: "Vous devez ajouter 1 g de potassium à une perfusion. Si vous avez des flacons de 10 ml à 5%, combien de ml allez-vous prélever ?", 
    options: ["5 ml", "10 ml", "15 ml", "20 ml"], 
    answer: "20 ml" 
  },
  { 
    id: 14, 
    question: "Un bébé de 15 jours de 3 kg avec 39,4°C, refusant de manger, doit passer des examens. Par quoi commencez-vous ?", 
    options: ["Ponction lombaire", "Prise de sang", "Radio pulmonaire", "Examen des urines"], 
    answer: "Ponction lombaire" 
  },
  { 
    id: 15, 
    question: "Quel est l'antipyrétique le plus adapté pour un bébé de 15 jours avec 39,4°C ?", 
    options: ["Paracétamol", "Ibuprofène", "Aspirine", "Diclofénac"], 
    answer: "Paracétamol" 
  },
  { 
    id: 16, 
    question: "L’Amukin est dosé à 100 mg/ml. Pour administrer 150 mg, combien de ml allez-vous prélever ?", 
    options: ["1,5 ml", "2 ml", "1 ml", "0,75 ml"], 
    answer: "1,5 ml" 
  },
  { 
    id: 17, 
    question: "Un bébé de 6 mois pesant 10 kg doit recevoir du Claforan IV à 100 mg/kg/j en 4 doses. Quelle est la dose de Claforan à 8h ?", 
    options: ["250 mg", "500 mg", "1 g", "750 mg"], 
    answer: "250 mg" 
  },{ 
    id: 18, 
    question: "Un bébé doit recevoir 20 mg de médicament toutes les 8 heures. Quelle est la dose quotidienne ?", 
    options: ["60 mg", "40 mg", "80 mg", "120 mg"], 
    answer: "60 mg" 
  },
  { 
    id: 19, 
    question: "Pour un bébé de 6 mois pesant 10 kg, quelle est la dose d'ibuprofène à administrer ?", 
    options: ["100 mg/kg", "50 mg/kg", "10 mg/kg", "30 mg/kg"], 
    answer: "10 mg/kg" 
  },
  { 
    id: 20, 
    question: "Pour un nourrisson pesant 1,5 kg, quel est le débit de la pompe pour une alimentation entérale de 75 ml en 3 heures ?", 
    options: ["25 ml/h", "20 ml/h", "15 ml/h", "30 ml/h"], 
    answer: "25 ml/h" 
  },
  { 
    id: 21, 
    question: "Pour un bébé de 34 semaines, stable au J6 avec une alimentation par gavage à 2/3, quelle est la vitesse de l'alimentation parentérale ?", 
    options: ["10 ml/h", "15 ml/h", "20 ml/h", "25 ml/h"], 
    answer: "15 ml/h" 
  },
  { 
    id: 22, 
    question: "Un nourrisson doit recevoir 24 ml de lait par gavage toutes les 3 heures. Quelle est la vitesse de gavage ?", 
    options: ["8 ml/h", "10 ml/h", "12 ml/h", "16 ml/h"], 
    answer: "8 ml/h" 
  },
  { 
    id: 23, 
    question: "Quel est le poids approximatif d'un bébé de 20 jours qui reçoit 8 repas à 20 ml/h ?", 
    options: ["2 kg", "2,5 kg", "3 kg", "3,5 kg"], 
    answer: "2 kg" 
  },
  { 
    id: 24, 
    question: "Pour un nourrisson de 3 kg présentant un résidu gastrique propre de 15 ml, que faites-vous ?", 
    options: ["Arrêtez le gavage", "Continuez le gavage", "Réduisez le volume du prochain gavage", "Augmentez la fréquence des gavages"], 
    answer: "Continuez le gavage" 
  },
  { 
    id: 25, 
    question: "Pour un bébé présentant 6 ml de résidu gastrique sale lors du repas, que faites-vous ?", 
    options: ["Arrêtez immédiatement le gavage", "Continuez le gavage avec précaution", "Réduisez la dose de moitié", "Consultez un pédiatre avant de continuer"], 
    answer: "Arrêtez immédiatement le gavage" 
  },

  { 
    id: 26, 
    question: "Un bébé né à terme doit avoir une exsanguino transfusion à J2. Où l'installez-vous ?", 
    options: ["Lit chauffant", "Petit lit", "Couveuse", "Table chauffante"], 
    answer: "Table chauffante" 
  },
  { 
    id: 27, 
    question: "Un bébé né à terme venant de la maternité à J2 pour des antibiotiques, où l'installez-vous ?", 
    options: ["Table chauffante", "Petit lit", "Lit chauffant", "Couveuse"], 
    answer: "Petit lit" 
  },
  { 
    id: 28, 
    question: "Où placez-vous un ancien grand prématuré pesant 2200 g ?", 
    options: ["Table chauffante", "Petit lit", "Couveuse simple", "Lit chauffant"], 
    answer: "Lit chauffant" 
  },
  { 
    id: 29, 
    question: "Pour un bébé né pesant 1800g et stabilisé, où l'installez-vous ?", 
    options: ["Table chauffante", "Couveuse simple", "Petit lit", "Lit chauffant"], 
    answer: "Couveuse simple" 
  },
  { 
    id: 30, 
    question: "Un bébé de 3,8 kg en grosse détresse respiratoire est en salle d'accouchement sous lunettes. Où l'installez-vous ?", 
    options: ["Lit chauffant", "Couveuse", "Petit lit", "Table chauffante"], 
    answer: "Table ou lit chauffant" 
  },
  { 
    id: 31, 
    question: "Un bébé à terme de 2200g, instable respiratoire et hémodynamique. Où l'installez-vous ?", 
    options: ["Petit lit", "Couveuse simple", "Table chauffante", "Couveuse girafe"], 
    answer: "Table chauffante ou nouvelle couveuse qui se transforme en table" 
  },
  { 
    id: 32, 
    question: "Un bébé à terme avec un gros retard de croissance (1450g) et très instable. Où l'installez-vous ?", 
    options: ["Petit lit", "Lit chauffant", "Couveuse simple", "Couveuse girafe"], 
    answer: "Couveuse girafe" 
  },
  { 
    id: 33, 
    question: "Quel sera le débit pour un gavage de 200 ml en 2 heures ?", 
    options: ["100 ml/h", "200 ml/h", "50 ml/h", "150 ml/h"], 
    answer: "100 ml/h" 
  },
  { 
    id: 34, 
    question: "Quel sera le débit pour un gavage de 100 ml en 30 minutes ?", 
    options: ["150 ml/h", "200 ml/h", "100 ml/h", "50 ml/h"], 
    answer: "200 ml/h" 
  },
  { 
    id: 35, 
    question: "Quel sera le débit pour un gavage de 50 ml en 20 minutes ?", 
    options: ["150 ml/h", "200 ml/h", "100 ml/h", "50 ml/h"], 
    answer: "150 ml/h" 
  },
  { 
    id: 36, 
    question: "Un enfant doit recevoir 210 ml en trois heures. Il est en gavage continu. Quelle sera la vitesse du gavage ?", 
    options: ["70 ml/h", "50 ml/h", "100 ml/h", "150 ml/h"], 
    answer: "70 ml/h" 
  },
  { 
    id: 37, 
    question: "Un enfant doit recevoir 6x24 ml de lait en gavage discontinu sur 2 heures. Quel sera le débit à régler sur la pompe ?", 
    options: ["12 ml/h", "24 ml/h", "6 ml/h", "48 ml/h"], 
    answer: "12 ml/h" 
  },
  { 
    id: 38, 
    question: "Un enfant avec un résidu gastrique propre de 15 ml avant le repas, que faites-vous ?", 
    options: ["Arrêter le gavage", "Réinjecter et réduire la prochaine dose", "Réinjecter et poursuivre le gavage", "Poursuivre le gavage sans réinjection"], 
    answer: "Réinjecter et poursuivre le gavage" 
  },
  { 
    id: 39, 
    question: "Un enfant présente un résidu gastrique sale de 6 ml avant le repas, que faites-vous ?", 
    options: ["Réinjecter le résidu", "Ne pas réinjecter et prévenir le médecin", "Arrêter le gavage", "Continuer le gavage sans réinjection"], 
    answer: "Ne pas réinjecter et prévenir le médecin" 
  },
  { 
    id: 40, 
    question: "Le Clamoxyl sirop® est dosé à 250mg/5ml. Combien administrez-vous pour une dose de 150 mg ?", 
    options: ["3 ml", "5 ml", "2 ml", "4 ml"], 
    answer: "3 ml" 
  },
  { 
    id: 41, 
    question: "Combien de ml de potassium 5% devez-vous prélever pour ajouter 1g à une perfusion ?", 
    options: ["20 ml", "10 ml", "15 ml", "25 ml"], 
    answer: "20 ml" 
  },
  { 
    id: 42, 
    question: "Quelle sera la vitesse de l'alimentation parentérale pour un bébé de 1600g, recevant 120 ml IV par jour ?", 
    options: ["5 ml/h", "10 ml/h", "15 ml/h", "20 ml/h"], 
    answer: "5 ml/h" 
  },
  { 
    id: 43, 
    question: "Quelle sera la vitesse de l'alimentation entérale pour un bébé recevant 15 ml en 2h ?", 
    options: ["7,5 ml/h", "15 ml/h", "5 ml/h", "10 ml/h"], 
    answer: "7,5 ml/h" 
  },
  { 
    id: 44, 
    question: "Quels appareillages utilisez-vous pour surveiller un bébé avec un poids de 1600g ?", 
    options: ["Thermomètre", "Saturomètre", "Monitoring cardio-respiratoire", "Tous les trois"], 
    answer: "Tous les trois" 
  },
  { 
    id: 45, 
    question: "Pour un bébé de 3 kg présentant 39,4°C de fièvre, quel est l'antipyrétique à utiliser et la dose ?", 
    options: ["Ibuprofen 10 mg/kg", "Paracétamol 15 mg/kg", "Aspirine 5 mg/kg", "Doliprane 20 mg/kg"], 
    answer: "Paracétamol 15 mg/kg" 
  },
  {
    id: 46, 
    question: "Quelle est la proportion d'eau contenue dans le corps d'un nouveau-né ?", 
    options: ["45%", "65%", "75%", "80%"], 
    answer: "75%"
  },
  {
    id: 47, 
    question: "Quelle est la fréquence cardiaque normale d'un nouveau-né ?", 
    options: ["60-100 BPM", "80-120 BPM", "100-170 BPM", "120-180 BPM"], 
    answer: "100-170 BPM"
  },
  {
    id: 48, 
    question: "Quel est le traitement recommandé pour une diarrhée chez un nourrisson ?", 
    options: ["Antibiotiques", "Probiotiques", "Antidiarrhéiques", "Réhydratation orale"], 
    answer: "Réhydratation orale"
  },
  {
    id: 49, 
    question: "Quel est le signe clinique d'une déshydratation sévère chez un nourrisson ?", 
    options: ["Pâleur", "Oligurie", "Polypnée", "Tachycardie + pouls filiforme"], 
    answer: "Tachycardie + pouls filiforme"
  },
  {
    id: 50, 
    question: "Quel est le rôle principal de la sage-femme en cas de gastro-entérite chez un nourrisson ?", 
    options: ["Administrer des antibiotiques", "Isoler l'enfant", "Surveiller l'hydratation", "Donner un probiotique"], 
    answer: "Surveiller l'hydratation"
  },
  {
    id: 51, 
    question: "Quel est l'antipyrétique le plus adapté pour un bébé de 15 jours avec 39,4°C ?", 
    options: ["Paracétamol", "Ibuprofène", "Aspirine", "Diclofénac"], 
    answer: "Paracétamol"
  },
  {
    id: 52, 
    question: "À quel âge commence la diversification alimentaire chez le nourrisson ?", 
    options: ["2 mois", "4 mois", "6 mois", "8 mois"], 
    answer: "6 mois"
  },
  {
    id: 53, 
    question: "Quel est le poids moyen à la naissance pour un bébé à terme ?", 
    options: ["2 kg", "2,5 kg", "3 kg", "3,5 kg"], 
    answer: "3,5 kg"
  },
  {
    id: 54, 
    question: "Quel est l'âge de la première vaccination contre la tuberculose (BCG) ?", 
    options: ["À la naissance", "1 mois", "3 mois", "6 mois"], 
    answer: "À la naissance"
  },
  {
    id: 55, 
    question: "Quelle est la principale cause de mortalité néonatale dans les pays en développement ?", 
    options: ["Infections", "Malformations congénitales", "Asphyxie à la naissance", "Prématurité"], 
    answer: "Prématurité"
  },
  {
    id: 56, 
    question: "Quel est le facteur de risque majeur pour l'hypoglycémie néonatale ?", 
    options: ["Macrosomie", "Petite taille pour l'âge gestationnel", "Infection maternelle", "Prématurité"], 
    answer: "Prématurité"
  },
  {
    id: 57, 
    question: "Quelle est la première étape de la réanimation néonatale ?", 
    options: ["Stimulation tactile", "Ventilation au masque", "Massage cardiaque", "Administration d'oxygène"], 
    answer: "Stimulation tactile"
  },
  {
    id: 58, 
    question: "Quel est le principal indicateur de croissance utilisé chez le nourrisson ?", 
    options: ["Poids", "Taille", "Périmètre crânien", "IMC"], 
    answer: "Poids"
  },
  {
    id: 59, 
    question: "Quelle est la durée recommandée de l'allaitement maternel exclusif ?", 
    options: ["3 mois", "4 mois", "6 mois", "12 mois"], 
    answer: "6 mois"
  },
  {
    id: 60, 
    question: "Quel est le principal danger de l'hyperbilirubinémie néonatale non traitée ?", 
    options: ["Surdité", "Crises épileptiques", "Kernictère", "Retard mental"], 
    answer: "Kernictère"
  },
  {
    id: 61, 
    question: "Quel test est utilisé pour dépister la phénylcétonurie chez le nouveau-né ?", 
    options: ["Test de Guthrie", "Test de Coombs", "Test de l'élastase", "Test de l'oxymétrie de pouls"], 
    answer: "Test de Guthrie"
  },
  {
    id: 62, 
    question: "Quel est le traitement initial de l'hypoglycémie chez un nouveau-né ?", 
    options: ["Alimentation orale", "Perfusion de glucose", "Alimentation parentérale", "Injection d'insuline"], 
    answer: "Perfusion de glucose"
  },
  {
    id: 63, 
    question: "Quelle est la position recommandée pour coucher un nouveau-né afin de prévenir la mort subite du nourrisson ?", 
    options: ["Sur le ventre", "Sur le côté", "Sur le dos", "Position semi-assise"], 
    answer: "Sur le dos"
  },
  {
    id: 64, 
    question: "Quel est le délai de fermeture normal de la fontanelle antérieure ?", 
    options: ["2 à 3 mois", "6 à 8 mois", "12 à 18 mois", "24 à 30 mois"], 
    answer: "12 à 18 mois"
  },
  {
    id: 65, 
    question: "Quelle est la première cause de jaunisse néonatale dans les 24 premières heures ?", 
    options: ["Incompatibilité ABO", "Infection", "Allaitement maternel", "Polycythémie"], 
    answer: "Incompatibilité ABO"
  },
  {
    id: 66, 
    question: "Quelle est la température ambiante recommandée pour un nouveau-né ?", 
    options: ["18-20°C", "20-22°C", "22-24°C", "24-26°C"], 
    answer: "22-24°C"
  },
  {
    id: 67, 
    question: "Quel est le principal facteur de risque de l'entérocolite nécrosante chez le nouveau-né ?", 
    options: ["Alimentation parentérale", "Prématurité", "Infection bactérienne", "Allaitement artificiel"], 
    answer: "Prématurité"
  },
  {
    id: 68, 
    question: "Quel est le signe clinique le plus évocateur de la sténose hypertrophique du pylore chez le nourrisson ?", 
    options: ["Vomissements bilieux", "Vomissements en jet", "Diarrhée", "Rectorragies"], 
    answer: "Vomissements en jet"
  },
  {
    id: 69, 
    question: "À partir de quel poids un nouveau-né est-il considéré comme macrosome ?", 
    options: ["3,5 kg", "4 kg", "4,5 kg", "5 kg"], 
    answer: "4 kg"
  },
  {
    id: 70, 
    question: "Quel est le traitement de première ligne pour l'infection urinaire chez un nourrisson ?", 
    options: ["Amoxicilline", "Ceftriaxone", "Ciprofloxacine", "Nitrofurantoïne"], 
    answer: "Amoxicilline"
  },
  {
    id: 71, 
    question: "Quelle est la principale complication de la rubéole congénitale ?", 
    options: ["Surdité", "Cardiopathie", "Cataracte", "Microcéphalie"], 
    answer: "Surdité"
  },
  {
    id: 72, 
    question: "Quel est le signe clinique le plus commun d'une méningite néonatale ?", 
    options: ["Fièvre", "Raideur de la nuque", "Convulsions", "Hypotonie"], 
    answer: "Hypotonie"
  },
  {
    id: 73, 
    question: "Quel est le traitement recommandé pour un nourrisson présentant une hyperbilirubinémie sévère ?", 
    options: ["Photothérapie", "Perfusion de plasma", "Dialyse", "Transfusion sanguine"], 
    answer: "Photothérapie"
  },
  {
    id: 74, 
    question: "À quel âge commence l'éruption des premières dents chez le nourrisson ?", 
    options: ["2 mois", "4 mois", "6 mois", "8 mois"], 
    answer: "6 mois"
  },
  {
    id: 75, 
    question: "Quel est le score d'Apgar normal pour un nouveau-né à 5 minutes ?", 
    options: ["5-7", "7-9", "9-10", "10-12"], 
    answer: "7-9"
  },
  {
    id: 76, 
    question: "Quel est le facteur de risque le plus fréquent de la détresse respiratoire néonatale ?", 
    options: ["Prématurité", "Macrosomie", "Diabète maternel", "Infection intra-utérine"], 
    answer: "Prématurité"
  },
  {
    id: 77, 
    question: "Quelle est la quantité quotidienne normale de selles pour un nouveau-né allaité ?", 
    options: ["1-2 fois par jour", "3-4 fois par jour", "5-6 fois par jour", "7-8 fois par jour"], 
    answer: "3-4 fois par jour"
  },
  {
    id: 78, 
    question: "Quelle est la cause principale de l'hypothermie chez le nouveau-né ?", 
    options: ["Infection", "Prématurité", "Hypoglycémie", "Environnement froid"], 
    answer: "Environnement froid"
  },
  {
    id: 79, 
    question: "Quelle est la définition d'un nouveau-né de faible poids de naissance ?", 
    options: ["Moins de 2 kg", "Moins de 2,5 kg", "Moins de 3 kg", "Moins de 3,5 kg"], 
    answer: "Moins de 2,5 kg"
  },
  {
    id: 80, 
    question: "Quel est le principal signe de la coqueluche chez le nourrisson ?", 
    options: ["Toux sèche", "Cyanose", "Fièvre", "Vomissements"], 
    answer: "Toux sèche"
  },
  {
    id: 81, 
    question: "Quel est le traitement de choix pour une pneumonie néonatale ?", 
    options: ["Pénicilline", "Ceftriaxone", "Ampicilline + Gentamicine", "Clarithromycine"], 
    answer: "Ampicilline + Gentamicine"
  },
  {
    id: 82, 
    question: "À quel moment est-il recommandé de couper le cordon ombilical chez le nouveau-né ?", 
    options: ["Immédiatement après la naissance", "Après 1 minute", "Après 2 minutes", "Après 3 minutes"], 
    answer: "Après 1 minute"
  },
  {
    id: 83, 
    question: "Quel est le test utilisé pour évaluer le développement neurologique d'un nourrisson ?", 
    options: ["Score de Ballard", "Score d'Apgar", "Test de Brazelton", "Test de Denver"], 
    answer: "Test de Denver"
  },
  {
    id: 84, 
    question: "Quelle est la principale mesure préventive contre la transmission materno-fœtale du VIH ?", 
    options: ["Antibiotiques", "Prophylaxie antirétrovirale", "Césarienne", "Allaitement artificiel"], 
    answer: "Prophylaxie antirétrovirale"
  },
  {
    id: 85, 
    question: "Quel est le taux de survie des nouveau-nés ayant un score d'Apgar inférieur à 4 à 5 minutes ?", 
    options: ["20%", "50%", "70%", "90%"], 
    answer: "50%"
  },
  {
    id: 86, 
    question: "Quel est le signe clinique évocateur d'une hyperthermie néonatale ?", 
    options: ["Tachycardie", "Cyanose", "Hypotonie", "Somnolence"], 
    answer: "Tachycardie"
  },
  {
    id: 87, 
    question: "Quel est le taux de bilirubine nécessitant une photothérapie chez un nouveau-né ?", 
    options: ["10 mg/dL", "12 mg/dL", "15 mg/dL", "18 mg/dL"], 
    answer: "15 mg/dL"
  },
  {
    id: 88, 
    question: "Quelle est la principale complication de l'ictère nucléaire ?", 
    options: ["Surdité", "Cécité", "Retard mental", "Spasticité"], 
    answer: "Spasticité"
  },
  {
    id: 89, 
    question: "Quelle est la fréquence respiratoire normale d'un nouveau-né ?", 
    options: ["20-40/min", "30-50/min", "40-60/min", "50-70/min"], 
    answer: "40-60/min"
  },
  {
    id: 90, 
    question: "Quel est le signe d'une infection néonatale précoce ?", 
    options: ["Hypothermie", "Hyperthermie", "Vomissements", "Convulsions"], 
    answer: "Hypothermie"
  },
  {
    id: 91, 
    question: "Quelle est la mesure immédiate en cas d'aspiration méconiale sévère ?", 
    options: ["Ventilation au masque", "Intubation et aspiration", "Massage cardiaque", "Administration d'antibiotiques"], 
    answer: "Intubation et aspiration"
  },
  {
    id: 92, 
    question: "Quel est le traitement recommandé pour une septicémie néonatale ?", 
    options: ["Ceftriaxone", "Ampicilline + Gentamicine", "Vancomycine", "Clindamycine"], 
    answer: "Ampicilline + Gentamicine"
  },
  {
    id: 93, 
    question: "Quel est l'âge de dépistage recommandé pour la surdité néonatale ?", 
    options: ["À la naissance", "1 mois", "3 mois", "6 mois"], 
    answer: "À la naissance"
  },
  {
    id: 94, 
    question: "Quelle est la principale cause de l'hypocalcémie néonatale ?", 
    options: ["Prématurité", "Macrosomie", "Infection maternelle", "Diabète maternel"], 
    answer: "Prématurité"
  },
  {
    id: 95, 
    question: "Quel est le principal signe clinique d'une cardiopathie congénitale chez le nouveau-né ?", 
    options: ["Cyanose", "Tachycardie", "Tachypnée", "Murmure cardiaque"], 
    answer: "Cyanose"
  },
  {
    id: 96, 
    question: "Quelle est la principale cause de mortalité chez les nouveau-nés prématurés ?", 
    options: ["Infections", "Syndrome de détresse respiratoire", "Hémorragie intraventriculaire", "Entérocolite nécrosante"], 
    answer: "Syndrome de détresse respiratoire"
  },
  {
    id: 97, 
    question: "Quel est le signe d'une infection du site ombilical ?", 
    options: ["Rougeur", "Douleur", "Écoulement purulent", "Odeur fétide"], 
    answer: "Écoulement purulent"
  },
  {
    id: 98, 
    question: "Quelle est la principale cause de convulsions néonatales ?", 
    options: ["Hypoglycémie", "Infection", "Hypocalcémie", "Asphyxie"], 
    answer: "Hypoglycémie"
  },
  {
    id: 99, 
    question: "Quel est le traitement préventif de la maladie hémorragique du nouveau-né ?", 
    options: ["Administration de vitamine K", "Photothérapie", "Transfusion sanguine", "Antibiotiques"], 
    answer: "Administration de vitamine K"
  },
  {
    id: 100, 
    question: "Quelle est la durée recommandée pour l'administration de vitamine D chez le nourrisson ?", 
    options: ["3 mois", "6 mois", "12 mois", "24 mois"], 
    answer: "12 mois"
  },
  {
    id: 101, 
    question: "Quel est le facteur de risque majeur pour la plagiocéphalie positionnelle chez le nourrisson ?", 
    options: ["Coucher sur le dos", "Coucher sur le ventre", "Assis prolongé", "Portage fréquent"], 
    answer: "Coucher sur le dos"
  },
  {
    id: 102, 
    question: "Quelle est la complication la plus fréquente de la varicelle néonatale ?", 
    options: ["Surinfection bactérienne", "Méningite", "Encéphalite", "Pneumonie"], 
    answer: "Surinfection bactérienne"
  },

       
      
];

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(new Set());
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    const shuffledQuestions = [...questionsData].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const currentQuestion = questions[currentQuestionIndex];
    const correct = selectedOption === currentQuestion.answer;
    setIsCorrect(correct);

    if (correct) {
      setCorrectAnswers(new Set(correctAnswers).add(currentQuestion.id));
      if (incorrectAnswers.includes(currentQuestion.id)) {
        setIncorrectAnswers(incorrectAnswers.filter(id => id !== currentQuestion.id));
      }
    } else {
      if (!incorrectAnswers.includes(currentQuestion.id)) {
        setIncorrectAnswers([...incorrectAnswers, currentQuestion.id]);
      }
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      moveToNextQuestion();
    }, 1000); // Attendre 3 secondes avant de passer à la question suivante
  };

  const moveToNextQuestion = () => {
    let nextIndex = currentQuestionIndex + 1;
    if (nextIndex >= questions.length) {
      nextIndex = 0;
    }
    setCurrentQuestionIndex(nextIndex);
  };

  useEffect(() => {
    if (incorrectAnswers.length > 0 && currentQuestionIndex >= questions.length - 1) {
      const nextQuestions = questions.filter(q => incorrectAnswers.includes(q.id));
      setQuestions([...questions, ...nextQuestions]);
    }
  }, [currentQuestionIndex]);

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">{currentQuestion.question}</h2>
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const buttonColor = isSelected
              ? isCorrect
                ? 'bg-green-500'
                : 'bg-red-500'
              : 'bg-blue-500';

            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null} // Désactiver les boutons après une sélection
                className={`block w-full p-2 text-white rounded-lg ${buttonColor} ${
                  selectedAnswer === null ? 'hover:bg-blue-600' : ''
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
