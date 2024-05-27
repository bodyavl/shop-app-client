import axios from "axios";

export async function signUp(email: string, password: string) {
  const res = await axios.post(`${process.env.API_URL}/auth/email/register`, {
    email,
    password,
  });

  return res.data;
}
