# lempire-challenge

## Context

En utilisant Meteor.js avec Blaze comme framework front, réalise une liste d'export qui répond aux règles suivantes :

- La page doit afficher un bouton "Export" qui permet de démarrer de façon asynchrone un nouvel export
- La page doit afficher la liste des exports avec leur progression
- Une fois l'export terminé, la liste doit afficher l'URL du résultat Un export se définit de la façon suivante :
- Un export est terminé lorsqu'il atteint 100%
- Il avance de 5% chaque seconde
- une fois arrivé à 100%, il sélectionne une url au hasard parmi les urls suivantes
- https://www.lempire.com/
- https://www.lemlist.com/
- https://www.lemverse.com/
- https://www.lemstash.com/

## Installation

1. Clone the repository
2. Go to the `lempire-challenge` folder
3. install dependencies : `meteor npm install`
4. run the project : `meteor`

## Additional information

- The startup folder impor all necessary dependencies and it is split into 2 section : `server` and `client`
- The back expose 1 method to start the export and 1 publication for the export collection
- The client is splitted into 2 components + 2 basic components (button + progress bar) :
  - `list of items` (contain the item template + button)
  - `item` (contain the progress bar)
