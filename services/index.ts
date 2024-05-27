import axios from "axios";

const ApiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default ApiClient;
