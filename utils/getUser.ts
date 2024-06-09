import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../interfaces";

const getUser = async (): Promise<IUser | null | undefined> => {
  try {
    const userString = await AsyncStorage.getItem("user");
    console.log(userString);
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  } catch (error) {
    console.error("Error setting token:", error);
  }
};

export default getUser;
