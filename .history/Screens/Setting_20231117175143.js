import React, { useState, useEffect } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = () => {
  const [inputData, setInputData] = useState("");
  const [cachedData, setCachedData] = useState("");

  // Function to save input data to AsyncStorage
  const saveDataToCache = async () => {
    try {
      await AsyncStorage.setItem("userInput", inputData);
      console.log("Data saved to AsyncStorage");
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  // Function to retrieve data from AsyncStorage
  const loadDataFromCache = async () => {
    try {
      const savedData = await AsyncStorage.getItem("userInput");
      if (savedData !== null) {
        setCachedData(savedData);
        console.log("Data loaded from AsyncStorage");
      }
    } catch (error) {
      console.error("Error loading data from AsyncStorage:", error);
    }
  };

  // Load data from cache when the component mounts
  useEffect(() => {
    loadDataFromCache();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter data"
        value={inputData}
        onChangeText={(text) => setInputData(text)}
        onBlur={saveDataToCache} // Save data to cache when input loses focus
      />

      {cachedData !== "" && (
        <View style={styles.cachedDataContainer}>
          <Text style={styles.cachedDataText}>Cached Data: {cachedData}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: "100%",
  },
  cachedDataContainer: {
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  cachedDataText: {
    fontSize: 16,
  },
});

export default Setting;
