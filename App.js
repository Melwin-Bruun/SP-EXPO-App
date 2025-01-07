import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import images from "./assets/images";

function App() {
  const [randomQuote, setRandomQuote] = useState('');
  const [randomCharacter, setRandomCharacter] = useState('');
  const [characterQuotes, setCharacterQuotes] = useState([]);
  const [multiCharacterQuotes, setMultiCharacterQuotes] = useState([]);
  const [characterInput, setCharacterInput] = useState('');
  const [multiCharacterInput, setMultiCharacterInput] = useState('');
  const staticImage = require("./assets/icon-152x152.png");
  // Function to fetch a random quote
  const getRandomQuote = async () => {
    try {
      const response = await fetch('https://southparkquotes.onrender.com/v1/quotes');
      const data = await response.json();
      if (data.length > 0) {
        setRandomQuote(data[0].quote);
        setRandomCharacter(data[0].character);
      }
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  // Function to fetch quotes by character
  const getQuotesByCharacter = async () => {
    try {
      const response = await fetch(`https://southparkquotes.onrender.com/v1/quotes/search/${characterInput}`);
      const data = await response.json();
      setCharacterQuotes(data);
    } catch (error) {
      console.error('Error fetching character quotes:', error);
    }
  };

  // Function to fetch multiple random quotes
  const getQuotesFromMultipleCharacters = async () => {
    try {
      const response = await fetch(`https://southparkquotes.onrender.com/v1/quotes/${multiCharacterInput}`);
      const data = await response.json();
      setMultiCharacterQuotes(data);
    } catch (error) {
      console.error('Error fetching multiple quotes:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>South Park Quotes</Text>
        <Image style={styles.picture} source={images.icon} alt="South Park Logo" />

        {/* Random quote section */}
        <View style={styles.box}>
          <Text style={styles.subtitle}>Get a Random Quote</Text>
          <Button title="Get Random Quote" onPress={getRandomQuote} />
          {randomQuote && (
            <View style={styles.notification}>
              <Text>{randomQuote}</Text>
              <Text style={styles.bold}>{randomCharacter}</Text>
            </View>
          )}
        </View>

        {/* Quotes by character section */}
        <View style={styles.box}>
          <Text style={styles.subtitle}>Get Quotes by Character</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter character's name"
            value={characterInput}
            onChangeText={setCharacterInput}
          />
          <Button title="Get Quotes" onPress={getQuotesByCharacter} />
          {characterQuotes.length > 0 && (
            <View style={styles.notification}>
              {characterQuotes.map((quote, index) => (
                <Text key={index}>{quote.quote} - <Text style={styles.bold}>{quote.character}</Text></Text>
              ))}
            </View>
          )}
        </View>

        {/* Multiple quotes section */}
        <View style={styles.box}>
          <Text style={styles.subtitle}>Get A Number of Quotes from Multiple Characters</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a number like 3"
            value={multiCharacterInput}
            onChangeText={setMultiCharacterInput}
            keyboardType="numeric"
          />
          <Button title="Get Quotes" onPress={getQuotesFromMultipleCharacters} />
          {multiCharacterQuotes.length > 0 && (
            <View style={styles.notification}>
              {multiCharacterQuotes.map((quote, index) => (
                <Text key={index}>{quote.quote} - <Text style={styles.bold}>{quote.character}</Text></Text>
              ))}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "20px",
    backgroundColor: 'white', // White background
    justifyContent: 'center', // Centers components vertically
    alignItems: 'center', // Centers components horizontally
    padding: 20, // Padding around the edges
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
  box: {
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Shadow effect for Android
    marginBottom: 20, // Adds spacing between the boxes
  },
  button: {
    backgroundColor: '#b7d6ff', // Default button background
    width: '100%', // Button takes full width inside its container
    paddingVertical: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%', // Make the input take up the full width of the box
    padding: 10,
    fontSize: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#b7d6ff', // Light blue border
    borderRadius: 4,
  },
  notification: {
    padding: 15,
    backgroundColor: '#b7d6ff', // Light blue background for notifications
    borderRadius: 6,
    marginTop: 10,
    width: '100%', // Notification takes up full width inside the box
  },
  notificationText: {
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  picture:{
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    alignItems: "center",
    
  },
});

export default App;
