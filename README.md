South Park Quotes App

Beskrivning

Detta är en React Native-app som hämtar och visar citat från South Park-karaktärer. Användaren kan:

Hämta ett slumpmässigt citat

Hämta citat från en specifik karaktär

Hämta flera slumpmässiga citat från olika karaktärer

Appen använder South Park Quotes API: https://southparkquotes.onrender.com/v1/quotes.

Funktioner

Slumpmässigt citat: Hämtar ett slumpmässigt citat och visar karaktären som sa det.

Citat per karaktär: Låter användaren ange en karaktärsnamn och få citat från den karaktären.

Flera citat: Låter användaren ange ett nummer och hämta så många citat från olika karaktärer.

Teknologier

React Native

Expo

Fetch API för att hämta data från South Park Quotes API

Installation

1. Klona detta repository

 git clone https://github.com/Melwin-Bruun/SP-EXPO-App.git

2. Navigera till projektmappen

cd SP-EXPO-App

3. Installera nödvändiga beroenden

npm install

4. Starta Expo

npx expo start

Expo CLI startar och ger dig möjlighet att köra appen på en fysisk enhet eller emulator.

Appens struktur

SP-EXPO-App/
│── assets/              # Bilder och ikoner
│── App.js               # Huvudkomponenten
│── package.json         # Projektberoenden och skript
│── babel.config.js      # Babel-konfiguration
│── README.md            # Dokumentation

Kända problem

Om API:et inte svarar, kontrollera att https://southparkquotes.onrender.com är tillgängligt.

Se till att Expo är installerat globalt med npm install -g expo-cli om det behövs.

Författare

Melwin Bruun

Licens

Denna kod är öppen källkod och kan användas enligt MIT-licensen.

