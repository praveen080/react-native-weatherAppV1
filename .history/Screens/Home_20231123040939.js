import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ForecastScreen from "./forecast";

const Home = () => {
  const currentDate = new Date();
  const navigation = useNavigation();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cachedData, setCachedData] = useState("");

  const loadDataFromCache = async () => {
    try {
      const savedData = await AsyncStorage.getItem("userInput");
      if (savedData !== null) {
        setCachedData(savedData);
        fetchWeatherData();
        console.log("Data loaded from AsyncStorage");
      }
    } catch (error) {
      console.error("Error loading data from AsyncStorage:", error);
    }
  };

   useEffect(() => {
     const updateCachedData = (newCachedData) => {
       setCachedData(newCachedData);
       fetchWeatherData(); // Update weather data when cached data changes
     };

     // Listen for the event
     const unsubscribe = navigation.addListener(
       "updateCachedData",
       updateCachedData
     );

     // Cleanup the subscription when the component unmounts
     return () => unsubscribe();
   }, [navigation]);

  const fetchWeatherData = async () => {
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      cachedData +
      "&appid=2891236865fb81dd11cf0be56216e1cb&units=metric ";
    try {
      const response = await axios.get(url);
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
    navigation.navigate("Setting");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.dateTimeText}>
        {formattedDate} {formattedTime}
      </Text>
      <Text style={styles.location}>{cachedData}</Text>
      <TouchableOpacity
        onPress={handleLocation}
        style={styles.locationContainer}
      >
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
                <Image
                  source={require("./assets/cold.png")}
                  style={styles.iconT}
                />
                <Text style={styles.cardText}>
                  {weatherData && weatherData.main
                    ? `${Math.floor(weatherData.main.temp_max)}°/${Math.floor(
                        weatherData.main.temp_min
                      )}°`
                    : "N/A"}
                </Text>
                <Text style={styles.locationText1}>Max/Min</Text>
              </View>
              <View style={styles.card}>
                <Image
                  source={require("./assets/humidity.png")}
                  style={styles.iconT}
                />
                <Text style={styles.cardText}>
                  {weatherData && weatherData.main
                    ? `${weatherData.main.humidity}%`
                    : "N/A"}
                </Text>
                <Text style={styles.locationText1}>Humidity</Text>
              </View>
              <View style={styles.card}>
                <Image
                  source={require("./assets/storm.png")}
                  style={styles.iconT}
                />
                <Text style={styles.cardText}>
                  {weatherData && weatherData.wind
                    ? `${Math.floor(weatherData.wind.speed)}km/h`
                    : "N/A"}
                </Text>
                <Text style={styles.locationText1}>wind</Text>
              </View>
            </View>
          </View>
          <ForecastScreen />
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
    // margin: 20,
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
  iconWeather: {
    width: 70,
    height: 70,
  },
  iconS: {
    width: 50,
    height: 50,
  },
  iconT: {
    width: 30,
    height: 30,
    // margin: 10,
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
