import React, { useEffect, useState } from "react";
import { View, Text, Button ,SafeAreaView} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = () => {
  const [cachedData, setCachedData] = useState(null);

  // Function to save data to AsyncStorage
  const saveDataToCache = async () => {
    try {
      const dataToSave = { key: "value" }; // Replace with your data
      await AsyncStorage.setItem("myKey", JSON.stringify(dataToSave));
      console.log("Data saved to AsyncStorage");
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  // Function to retrieve data from AsyncStorage
  const loadDataFromCache = async () => {
    try {
      const savedData = await AsyncStorage.getItem("myKey");
      if (savedData !== null) {
        setCachedData(JSON.parse(savedData));
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
    <SafeAreaView>
      
      <Button title="Save to Cache" onPress={saveDataToCache} />
    </SafeAreaView>
  );
};

export default Setting;
