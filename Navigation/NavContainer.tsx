import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import LoginStack from "./LoginStack";
import RootStack from "./RootStack";

export default function NavContainer() {
  const { authState } = useAuth();

  useEffect(() => {
    console.log(authState);
  });

  return (
    <NavigationContainer>
      {authState?.authenticated ? <RootStack /> : <LoginStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
