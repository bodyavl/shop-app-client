import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../interfaces";

const setUser = async (user: IUser): Promise<void> => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
    console.log("User set successfully!");
  } catch (error) {
    console.error("Error setting token:", error);
  }
};

export default setUser;
