import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

interface InputProps extends TextInputProps {
  // Add any additional props you need
}

const Input: React.FC<InputProps> = (props) => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Input;
