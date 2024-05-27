import React from "react";

import Home from "../Screens/Home";
import Details, { IDetailsProps } from "../Screens/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./HomeTabs";

export type RootStackParamList = {
  HomeTabs: undefined;
  Details: IDetailsProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerTitle: "Home" }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default RootStack;
