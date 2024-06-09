import ApiClient from "..";
import { AuthResponse } from "./types";

export async function signIn(email: string, password: string) {
  const res = await ApiClient.post<AuthResponse>(`/auth/email/login`, {
    email,
    password,
  });

  return res.data;
}
