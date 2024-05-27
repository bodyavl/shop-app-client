import {
  Button,
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useCallback } from "react";
import { DetailsProps } from "../types";
import { useFocusEffect } from "@react-navigation/native";
import { getProductDetails } from "../services/products/getProductDetails";
import { IMovie } from "../interfaces";
import { DetailsAbout } from "../Components/UI";
import { IProduct } from "../services/products/types";
const bgImage = require("../assets/Background.png");

export interface IDetailsProps {
  id: number;
  title: string;
}

const Details = ({ route, navigation }: DetailsProps) => {
  const { id, title } = route.params;

  const [product, setProduct] = React.useState<IProduct>();

  useFocusEffect(
    useCallback(() => {
      async function getMovie() {
        try {
          const res = await getProductDetails(+id);
          setProduct(res);
        } catch (error) {
          alert(error);
        }
      }

      navigation.setOptions({ title });
      getMovie();
    }, [id])
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.innerContainer}>
          <Image
            source={{
              uri: product?.photo?.path,
            }}
            style={styles.photo}
          />
          <Text style={styles.name}>{product?.name}</Text>
          <Text style={styles.descr}>{product?.description}</Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#121829",
  },
  innerContainer: {
    height: "auto",
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  descr: {
    color: "#8E95A9",
    fontSize: 16,
  },
  genres: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },

  photo: {
    borderRadius: 12,
    width: "100%",
    height: 550,
  },
  loading: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
    flex: 1,
  },
});
