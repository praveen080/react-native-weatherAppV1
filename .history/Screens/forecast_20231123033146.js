import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import axios from "axios";

const ForecastScreen = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=7&appid=2891236865fb81dd11cf0be56216e1cb&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const currentDate = new Date();
  const daysOfWeek = [];
  for (let i = 2; i < 7; i++) {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + i);
    const dayOfWeek = nextDay.toLocaleDateString("en-US", {
      weekday: "long",
    });
    daysOfWeek.push(dayOfWeek);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardFull2}>
        <View style={styles.locationContainer2}>
          <View style={styles.week}>
            <Text style={styles.day}>Day</Text>
            <Text style={styles.day}>Tomorrow</Text>
            {daysOfWeek.map((day, index) => (
              <Text key={index} style={styles.day}>
                {day.slice(0, 3)}
              </Text>
            ))}
          </View>
          <View>
            <Text style={styles.day}>Humidity</Text>
            {weatherData?.list.map((day, index) => (
              <Text key={index} style={styles.day}>
                {day.humidity}%
              </Text>
            ))}
          </View>
          <View>
            <Text style={styles.day}>Max/Min</Text>
            {weatherData?.list.map((day, index) => (
              <Text key={index} style={styles.day}>
                {Math.floor(day.temp.max)}°°/{Math.floor(day.temp.min)}°
              </Text>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... (your existing styles)
});

export default ForecastScreen;
