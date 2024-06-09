import AsyncStorage from "@react-native-async-storage/async-storage";

const setRefreshToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem("refreshToken", token);
    console.log("Token set successfully!");
  } catch (error) {
    console.error("Error setting token:", error);
  }
};

export default setRefreshToken;
