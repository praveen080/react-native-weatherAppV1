
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Location Text with Icon */}
      <TouchableOpacity>
        <Text style={styles.locationText}>Location</Text>
        <Image
          source={require("./path-to-your-location-icon.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Current Time and Date */}
      <Text style={styles.dateTimeText}>{new Date().toLocaleString()}</Text>

      {/* Numbers */}
      <View style={styles.numbersContainer}>
        <Text style={styles.number}>12</Text>
        <Text style={styles.number}>34</Text>
      </View>

      {/* Logo */}
      <Image source={require("./path-to-your-logo.png")} style={styles.logo} />

      {/* Card */}
      <View style={styles.card} />
    </View>
  );
};

export default Home;


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    fontSize: 20,
    marginTop: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  dateTimeText: {
    fontSize: 18,
    marginTop: 20,
  },
  numbersContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  number: {
    fontSize: 50,
    marginRight: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
    marginTop: 20,
  },
});

// // Weather.js

// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import axios from "axios";

// const Home = () => {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState("");

//   const apiKey = "2891236865fb81dd11cf0be56216e1cb";

//   const fetchWeatherData = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//       );
//       setWeatherData(response.data);
//       setError("");
//     } catch (error) {
//       setWeatherData(null);
//       setError("City not found. Please try again.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Weather App</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter city"
//         value={city}
//         onChangeText={(text) => setCity(text)}
//       />
//       <Button title="Get Weather" onPress={fetchWeatherData} />
//       {weatherData && (
//         <View>
//           <Text>{`City: ${weatherData.name}`}</Text>
//           <Text>{`Temperature: ${weatherData.main.temp}°C`}</Text>
//           {/* Add more weather details as needed */}
//         </View>
//       )}
//       {error !== "" && <Text style={styles.error}>{error}</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10,
//     width: 200,
//   },
//   error: {
//     color: "red",
//     marginTop: 10,
//   },
// });

// export default Home;
