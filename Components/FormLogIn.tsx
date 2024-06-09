import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Input from "./UI/Input";
import { useAuth } from "../context/AuthContext";

interface IFormLogInProps {
  navigator: any;
}

const FormLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin } = useAuth();

  const handleLogin = async () => {
    // Implement your login logic here
    await onLogin(email, password);
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
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
});

export default FormLogIn;
