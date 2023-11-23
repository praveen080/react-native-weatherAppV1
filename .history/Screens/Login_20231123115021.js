import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Input, Button, Text } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    // Check if there are existing credentials in AsyncStorage
    const checkCredentials = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        const storedPassword = await AsyncStorage.getItem("password");

        if (storedUsername && storedPassword) {
          // If credentials exist, navigate to the home page or another authenticated page
          navigation.replace("HomePage"); // Change 'HomePage' to your actual home page name
        }
      } catch (error) {
        console.error("Error checking credentials:", error);
      }
    };
    checkCredentials();
  }, []);

  const handleLogin = async () => {
    if (username && password) {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        const storedPassword = await AsyncStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
          // If credentials match, navigate to the home page or another authenticated page
          navigation.replace("HomePage"); // Change 'HomePage' to your actual home page name
        } else {
          console.log("Invalid username or password.");
        }
      } catch (error) {
        console.error("Error retrieving credentials:", error);
      }
    } else {
      console.log("Please enter a username and password.");
    }
  };

  const handleCreateAccount = () => {
    // Add navigation to the create account page
    console.log("Creating account...");
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.cardTitle}>Login</Card.Title>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          containerStyle={styles.inputContainer}
        />
        <Button
          title="Login"
          onPress={handleLogin}
          buttonStyle={styles.loginButton}
        />
      </Card>
      <Text style={styles.createAccountText} onPress={handleCreateAccount}>
        Create an account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  card: {
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: "#3498db",
  },
  createAccountText: {
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#3498db",
  },
});

export default LoginPage;
