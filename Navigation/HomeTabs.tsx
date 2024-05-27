import React from "react";

import Home from "../Screens/Home";
import Details, { IDetailsProps } from "../Screens/Details";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabsProps } from "../types";
import { NavigatorScreenParams } from "@react-navigation/native";
import { RootStackParamList } from "./RootStack";

export type HomeTabsParamList = {
  Home: NavigatorScreenParams<RootStackParamList>;
};

const Tab = createBottomTabNavigator<HomeTabsParamList>();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string | undefined;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={(iconName as any) ?? "square"}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#121830",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
