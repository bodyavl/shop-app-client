import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getAccessToken(): Promise<string | null> {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    console.log("Token retrieved successfully!");
    console.log(token);
    return token;
  } catch (error) {
    console.error("Error retrieving access token:", error);
    return null;
  }
}
