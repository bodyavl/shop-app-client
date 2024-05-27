import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootStack from "./Navigation/RootStack";

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
