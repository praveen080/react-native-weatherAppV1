import { useFocusEffect } from "@react-navigation/native";
import { TextInput, Button, View } from "react-native";

const Setting = ({ navigation }) => {
  const [newInput, setNewInput] = React.useState("");

  useFocusEffect(
    React.useCallback(() => {
      // Logic to fetch user input and update cached data
      const handleUpdateCachedData = () => {
        // Perform any validation or processing needed on newInput
        const newCachedData = newInput.trim(); // Replace this with your logic

        // Emit an event to update the cached data in the Home component
        navigation.emit("updateCachedData", newCachedData);
      };

      return handleUpdateCachedData;
    }, [newInput, navigation])
  );

  return (
    <View>
      <TextInput
        placeholder="Enter location"
        value={newInput}
        onChangeText={setNewInput}
      />
      <Button title="Update Cached Data" onPress={handleUpdateCachedData} />
    </View>
  );
};

// import React, { useState, useEffect } from "react";
// import { View, TextInput, Button, Text, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import { useFocusEffect } from "@react-navigation/native";

// const Setting = () => {
//   const [inputData, setInputData] = useState("");
//   const [cachedData, setCachedData] = useState("");

//   // Function to save input data to AsyncStorage
//   const saveDataToCache = async () => {
//     try {
//       await AsyncStorage.setItem("userInput", inputData);
//       console.log("Data saved to AsyncStorage");
//     } catch (error) {
//       console.error("Error saving data to AsyncStorage:", error);
//     }
//   };

//   // Function to retrieve data from AsyncStorage
//   const loadDataFromCache = async () => {
//     try {
//       const savedData = await AsyncStorage.getItem("userInput");
//       if (savedData !== null) {
//         setCachedData(savedData);
//         console.log("Data loaded from AsyncStorage");
//       }
//     } catch (error) {
//       console.error("Error loading data from AsyncStorage:", error);
//     }
//   };

//   // Load data from cache when the component mounts
//   useEffect(() => {
//     loadDataFromCache();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter data"
//         value={inputData}
//         onChangeText={(text) => setInputData(text)}
//       />
//       <View style={styles.buttonContainer}>
//         <Button title="Save to Cache" onPress={saveDataToCache} />
//         <Button title="View Cache Data" onPress={loadDataFromCache} />
//       </View>

//       {cachedData !== "" && (
//         <View style={styles.cachedDataContainer}>
//           <Text style={styles.cachedDataText}>Cached Data: {cachedData}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//     width: "100%",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     width: "100%",
//     marginBottom: 16,
//   },
//   cachedDataContainer: {
//     marginTop: 16,
//     padding: 16,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//   },
//   cachedDataText: {
//     fontSize: 16,
//   },
// });

// export default Setting;
