import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

interface IDetailsAboutProps {
  children: React.ReactNode;
}

const DetailsAbout: FC<IDetailsAboutProps> = ({ children }) => {
  return (
    <View>
      <Text style={styles.detailsAbout}>{children}</Text>
    </View>
  );
};

export default DetailsAbout;

const styles = StyleSheet.create({
  detailsAbout: {
    color: "#fff",
    fontSize: 16,
  },
});
