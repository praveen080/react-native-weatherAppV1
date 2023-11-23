import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Home = () => {
  const currentDate = new Date();
  const navigation = useNavigation();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        // Replace YOUR_API_KEY with your actual OpenWeatherMap API key
        `http://api.openweathermap.org/data/2.5/weather?q=London&appid=2891236865fb81dd11cf0be56216e1cb&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    } finally {
      setLoading(false);
    }
  };

  const daysOfWeek = [];
  for (let i = 2; i < 7; i++) {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + i);
    const dayOfWeek = nextDay.toLocaleDateString("en-US", { weekday: "long" });
    daysOfWeek.push(dayOfWeek);
  }

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleLocation = () => {
    // navigation.navigate("Setting");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.dateTimeText}>
        {formattedDate} {formattedTime}
      </Text>
      <Text style={styles.location}>London</Text>
      <TouchableOpacity onPress={handleLocation} style={styles.locationContainer}>
        <Image source={require("./assets/location.png")} style={styles.icon} />
        <Text style={styles.locationText}>Location</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#0085FE" />
      ) : (
        <>
          <View style={styles.numbersContainer}>
            {weatherData && (
              <Text style={styles.number}>
                {Math.floor(weatherData.main.temp)}°
              </Text>
            )}
          </View>

          <View style={styles.locationContainer}>
            {weatherData && (
              <>
                <Image
                  source={{
                    uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
                  }}
                  style={styles.iconWeather}
                />
                <Text style={styles.locationText}>
                  {weatherData.weather[0].description}
                </Text>
              </>
            )}
          </View>

          <View style={styles}>
            <View style={styles.locationContainer1}>
              <View style={styles.card}>
                <Image source={require("./assets/cold.png")} style={styles.iconT} />
                <Text style={styles.cardText}>
                  {Math.floor(weatherData.main.temp_max)}°/
                  {Math.floor(weatherData.main.temp_min)}°
                </Text>
                <Text style={styles.locationText1}>Max/Min</Text>
              </View>
              <View style={styles.card}>
                <Image
                  source={require("./assets/humidity.png")}
                  style={styles.iconT}
                />
                <Text style={styles.cardText}>{weatherData.main.humidity}%</Text>
                <Text style={styles.locationText1}>Humidity</Text>
              </View>
              <View style={styles.card}>
                <Image
                  source={require("./assets/storm.png")}
                  style={styles.iconT}
                />
                <Text style={styles.cardText}>
                  {Math.floor(weatherData.wind.speed)}km/h
                </Text>
                <Text style={styles.locationText1}>wind</Text>
              </View>
            </View>
          </View>

          {/* <ForecastScreen/> */}
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5fafa",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationContainer1: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "white",
    borderRadius: 50,
    margin: 20,
  },
  locationContainer2: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "white",
    borderRadius: 50,
    margin: 10,
  },

  locationText: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: "bold",
  },
  locationText1: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: "bold",
   
