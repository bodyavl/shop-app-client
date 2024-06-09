import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import { IProduct } from "../services/products/types";
import { Ionicons } from "@expo/vector-icons";
import { removeFromCart } from "../services/products/removeFromCart";

interface CartContainerProps {
  cart: IProduct[];
  onRemove: (id: number) => void;
}

const CartContainer: React.FC<CartContainerProps> = ({ cart, onRemove }) => {
  return (
    <View style={styles.container}>
      {cart.map((product, index) => (
        <View key={index} style={styles.productContainer}>
          <Image source={{ uri: product?.photo?.path }} style={styles.photo} />
          <View style={{ flex: 1, flexDirection: "column", marginLeft: 15 }}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
          </View>
          <TouchableHighlight onPress={() => onRemove(product.id)}>
            <Ionicons name={"trash"} size={24} color={"red"} />
          </TouchableHighlight>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
  },
  productContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  productName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default CartContainer;
