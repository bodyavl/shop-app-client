import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import { HomeProps, LoginProps } from "../types";
const bgImage = require("../assets/Background.png");

export default function LogIn({ navigation }: LoginProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.background}
      ></ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121829",
  },
  background: {
    flex: 1,
  },
});
