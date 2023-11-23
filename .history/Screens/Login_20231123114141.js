 import React, { useState } from "react";
 import { View, StyleSheet } from "react-native";
 import { Card, Input, Button, Text } from "react-native-elements";

 const LoginPage = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = () => {
     // Add your login logic here
     console.log("Logging in...");
   };

   const handleCreateAccount = () => {
     // Add navigation to the create account page
     console.log("Creating account...");
   };

   return (
     <View style={styles.container}>
       <Card>
         <Card.Title>Login</Card.Title>
         <Input
           placeholder="Username"
           value={username}
           onChangeText={(text) => setUsername(text)}
         />
         <Input
           placeholder="Password"
           secureTextEntry
           value={password}
           onChangeText={(text) => setPassword(text)}
         />
         <Button title="Login" onPress={handleLogin} />
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
   },
   createAccountText: {
     marginTop: 20,
     textAlign: "center",
     textDecorationLine: "underline",
   },
 });

 export default LoginPage;
