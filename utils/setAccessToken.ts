import AsyncStorage from "@react-native-async-storage/async-storage";

const setAccessToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem("accessToken", token);
    console.log("Token set successfully!");
  } catch (error) {
    console.error("Error setting token:", error);
  }
};

export default setAccessToken;
