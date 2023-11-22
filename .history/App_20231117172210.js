import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartPage from "./Screens/startUp";
import Home from "./Screens/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <StartPage /> */}
    //   <Home />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff f",
    alignItems: "center",
    justifyContent: "center",
  },
});
