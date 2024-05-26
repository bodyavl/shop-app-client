import axios from "axios";

export async function getMovies() {
  const res = await axios.get(
    "https://practice-api-vlasenko-bohdan.onrender.com/movie/list"
  );
  return res.data;
}
