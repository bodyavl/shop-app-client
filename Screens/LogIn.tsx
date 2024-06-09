import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import { HomeProps, LoginProps } from "../types";
import FormLogIn from "../Components/FormLogIn";
const bgImage = require("../assets/Background.png");

export default function LogIn() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.background}
      >
        <FormLogIn />
      </ImageBackground>
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
