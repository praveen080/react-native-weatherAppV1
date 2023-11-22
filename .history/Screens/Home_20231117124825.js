// Weather.js

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const Home = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "2891236865fb81dd11cf0be56216e1cb";

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&`
      );
      setWeatherData(response.data);
      setError("");
    } catch (error) {
      setWeatherData(null);
      setError("City not found. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Get Weather" onPress={fetchWeatherData} />
      {weatherData && (
        <View>
          <Text>{`City: ${weatherData.name}`}</Text>
          <Text>{`Temperature: ${weatherData.main.temp}°C`}</Text>
          {/* Add more weather details as needed */}
        </View>
      )}
      {error !== "" && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 200,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default Home;
