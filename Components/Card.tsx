import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

interface ICardProps {
  title: string;
  imgSrc: string;
  price: number;
  onPress?: () => void;
}
const Card: React.FC<ICardProps> = ({ title, price, imgSrc, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <BlurView intensity={20} tint="default" style={styles.blur}>
          <Image
            source={{
              uri: imgSrc,
            }}
            style={styles.poster}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}$</Text>
        </BlurView>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "49%",
    height: 300,
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    height: 300,
    backgroundColor: "rgba(32, 40, 62, 0.8)",
    overflow: "hidden",
    borderRadius: 12,
  },
  blur: {
    padding: 8,
    paddingBottom: 0,
    borderRadius: 12,
    gap: 10,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 3,
    fontWeight: "400",
  },
  price: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 3,
    fontWeight: "600",
  },
  poster: {
    flex: 1,
    borderRadius: 12,
  },
});
