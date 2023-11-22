// src/components/StartPage.js
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 

const StartPage = () => {
  return (
    <View style={st yles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/weather.png")} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
          <Icon name="arrow-right" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>Weather</Text>
      <Text style={styles.bottomText}>Forecasts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    marginRight: 10,
  },
  bottomText: {
    marginTop: 0,
    fontSize: 60,
    fontWeight: "bold",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default StartPage;
