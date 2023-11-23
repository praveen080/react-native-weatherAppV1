import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const navigation = useNavigation();

  // Function to fetch weather data from OpenWeatherMap API
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        // Replace YOUR_API_KEY with your actual OpenWeatherMap API key
        `http://api.openweathermap.org/data/2.5/weather?q=London&appid=2891236865fb81dd11cf0be56216e1cb`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  useEffect(() => {
    // Fetch weather data on component mount
    fetchWeatherData();
  }, []);

  const currentDate = new Date();

  // Function to handle location
  const handleLocation = () => {
    // Implement your location handling logic
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Display date and time */}
      <Text style={styles.dateTimeText}>
        {currentDate.toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}{" "}
        {currentDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </Text>
      {/* Display location name */}
      <Text style={styles.location}>London</Text>
      {/* Location button */}
      <TouchableOpacity
        onPress={handleLocation}
        style={styles.locationContainer}
      >
        <Image source={require("./assets/location.png")} style={styles.icon} />
        <Text style={styles.locationText}>Location</Text>
      </TouchableOpacity>

      {/* Display current temperature */}
      <View style={styles.numbersContainer}>
        {weatherData && (
          <Text style={styles.number}>{weatherData.main.temp}°</Text>
        )}
      </View>

      {/* Display weather icon and description */}
      <View style={styles.locationContainer}>
        {weatherData && (
          <>
            <Image
              source={require("./assets/cloudy-day.png")} // Change this based on the weather data
              style={styles.iconS}
            />
            <Text style={styles.locationText}>
              {weatherData.weather[0].description}
            </Text>
          </>
        )}
      </View>

      {/* Display additional weather information */}
      <View style={styles.locationContainer1}>
        {weatherData && (
          <>
            <View style={styles.card}>
              <Image
                source={require("./assets/cold.png")}
                style={styles.iconT}
              />
              <Text style={styles.cardText}>
                {weatherData.main.temp_max}°/{weatherData.main.temp_min}°
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
              <Text style={styles.cardText}>{weatherData.wind.speed}km/h</Text>
              <Text style={styles.locationText1}>Wind</Text>
            </View>
          </>
        )}
      </View>

      {/* Display weather forecast for the next week */}
      <View style={styles.cardFull2}>
        <View style={styles.locationContainer2}>
          <View style={styles.week}>
            <Text style={styles.day}>Day</Text>
            <Text style={styles.day}>Tomorrow</Text>
            {/* Display days of the week */}
            {daysOfWeek.map((day, index) => (
              <Text key={index} style={styles.day}>
                {day.slice(0, 3)}
              </Text>
            ))}
          </View>
          {/* Display humidity information */}
          <View>
            <Text style={styles.day}>Humidity</Text>
            {weatherData && (
              <Text style={styles.day}>{weatherData.main.humidity}%</Text>
            )}
            {/* You can add more forecast data here */}
          </View>
          {/* Display max/min temperature information */}
          <View>
            <Text style={styles.day}>Max/Min</Text>
            {weatherData && (
              <>
                <Text style={styles.day}>{weatherData.main.temp_max}°/</Text>
                <Text style={styles.day}>{weatherData.main.temp_min}°</Text>
                {/* You can add more forecast data here */}
              </>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

// Your existing styles
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
    // color: "white",
  },
  location: {
    fontSize: 50,
    marginLeft: 5,
    fontWeight: "bold",
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconS: {
    width: 50,
    height: 50,
  },
  iconT: {
    width: 30,
    height: 30,
    margin: 10,
  },
  dateTimeText: {
    fontSize: 18,
    marginTop: 10,
    color: "grey",
  },
  numbersContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 20,
  },
  number: {
    fontSize: 100,
    // marginRight: 10,
    fontWeight: "bold",
    color: "#0085FE",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  cardText: {
    fontSize: 20,
    // color: "grey",
    fontWeight: "bold",
    // color: "white",
  },
  day: {
    fontSize: 16,
    // color: "grey",
    fontWeight: "bold",
    // color: "white",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },

  week: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    // color: "white",
  },
  cardFull: {
    borderRadius: 50,
    backgroundColor: "#0085FE",
    marginTop: 20,
    // color: "white",
  },
  cardFull2: {
    borderRadius: 20,
    // backgroundColor: "white",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    // color: "white",
  },
});
