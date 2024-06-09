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
import { IProduct } from "../services/products/types";
import { getProducts } from "../services/products/getProducts";
import CartContainer from "../Components/CartContainer";
import { getMe } from "../services/auth/getMe";
import { removeFromCart } from "../services/products/removeFromCart";
const bgImage = require("../assets/Background.png");

const Cart = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  async function getCart() {
    try {
      const res = await getMe();
      setProducts(res.cart);
    } catch (error) {
      alert(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getCart();
    }, [])
  );

  const handleCartRemove = async (id: number) => {
    await removeFromCart(id);
    await getCart();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.innerContainer}>
          <CartContainer cart={products} onRemove={handleCartRemove} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Cart;

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
