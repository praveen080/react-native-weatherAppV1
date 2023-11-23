import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Input, Button, Text } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const SignupPage = ({ navigation }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigation = useNavigation();

  const handleCreateAccount = () => {
    navigation.replace("Login");
  };

  const handleSignup = async () => {
    if (newUsername && newPassword) {
      try {
        const existingUsername = await AsyncStorage.getItem("username");
        if (existingUsername === newUsername) {
          console.log(
            "Username already exists. Please choose a different username."
          );
        } else {
          await AsyncStorage.setItem("username", newUsername);
          await AsyncStorage.setItem("password", newPassword);
          console.log("Signup successful! Details saved in AsyncStorage.");
          navigation.goBack();
        }
      } catch (error) {
        console.error("Error saving signup details:", error);
      }
    } else {
      console.log("Please enter a username and password.");
    }
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.cardTitle}>Signup</Card.Title>
        <Input
          placeholder="Username"
          value={newUsername}
          onChangeText={(text) => setNewUsername(text)}
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          containerStyle={styles.inputContainer}
        />
        <Button
          title="Signup"
          onPress={handleSignup}
          buttonStyle={styles.signupButton}
        />
      </Card>
      <Text style={styles.createAccountText} onPress={handleCreateAccount}>
        Login
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
  signupButton: {
    backgroundColor: "#2ecc71",
  },
  createAccountText: {
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#3498db",
  },
});

export default SignupPage;
