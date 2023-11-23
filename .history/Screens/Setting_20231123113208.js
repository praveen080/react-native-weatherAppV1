import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text, StyleSheet, Picker } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = () => {
  const [inputData, setInputData] = useState("");
  const [temperatureUnit, setTemperatureUnit] = useState("Celsius"); // Default unit is Celsius

  // Function to save input data and temperature unit to AsyncStorage
  const saveDataToCache = async () => {
    try {
      // Save both the location and temperature unit
      await AsyncStorage.setItem("userInput", inputData);
      await AsyncStorage.setItem("temperatureUnit", temperatureUnit);
      console.log("Data saved to AsyncStorage");
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Location"
        value={inputData}
        onChangeText={(text) => setInputData(text)}
      />
      <Picker
        selectedValue={temperatureUnit}
        onValueChange={(itemValue, itemIndex) => setTemperatureUnit(itemValue)}
      >
        <Picker.Item label="Celsius" value="Celsius" />
        <Picker.Item label="Fahrenheit" value="Fahrenheit" />
      </Picker>
      <View style={styles.buttonContainer}>
        <Button title="Enter" onPress={saveDataToCache} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: "50%",
  },
});

export default Setting;


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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 16,
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

// import React, { useEffect } from "react";
// import { View, Text } from "react-native";
// import { useFocusEffect } from "@react-navigation/native";

// const MyScreen = () => {
//   // The effect will run when the screen comes into focus
//   useFocusEffect(
//     React.useCallback(() => {
//       // Your code to run when the screen is focused
//       console.log("Screen is focused");
//       // You can fetch data, update the UI, etc.

//       return () => {
//         // Your cleanup code when the component is unmounted or the screen loses focus
//         console.log("Screen is unfocused");
//       };
//     }, [])
//   );

//   return (
//     <View>
//       <Text>This is my screen</Text>
//     </View>
//   );
// };

// export default MyScreen;
