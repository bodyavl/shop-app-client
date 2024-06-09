import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import NavContainer from "./Navigation/NavContainer";

export default function App() {
  const { authState } = useAuth();

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  return (
    <AuthProvider>
      <NavContainer />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({});
