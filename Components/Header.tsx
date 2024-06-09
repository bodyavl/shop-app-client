import { StyleSheet, View } from "react-native";
import React from "react";

const Header = () => {
  return <View style={styles.container}></View>;
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 40,
    alignItems: "center",
    width: "auto",
  },
  icon: {
    width: 40,
  },
});
