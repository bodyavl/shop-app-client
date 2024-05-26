import axios from "axios";

export async function getMovieDetails(id: string) {
  const res = await axios.get(
    `https://practice-api-vlasenko-bohdan.onrender.com/movie/${id}`
  );
  return res.data;
}
