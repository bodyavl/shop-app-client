import ApiClient from "..";
import { AuthResponse } from "./types";

export async function signUp(email: string, password: string) {
  const res = await ApiClient.post<AuthResponse>(`/auth/email/register`, {
    email,
    password,
  });

  return res.data;
}
