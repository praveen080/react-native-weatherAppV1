import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartPage from "./Screens/startUp";
import Home from "./Screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StartPage /> */}
      <Home />
    </View>
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
