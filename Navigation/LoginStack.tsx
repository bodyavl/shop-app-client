import React from "react";

import LogIn from "../Screens/LogIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type LoginStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<LoginStackParamList>();

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <Stack.Screen name="Login" component={LogIn} />
    </Stack.Navigator>
  );
};

export default LoginStack;
