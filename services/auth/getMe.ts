import ApiClient from "..";
import { IUser } from "../../interfaces";
import { getAccessToken } from "../../utils/getAccessToken";

export async function getMe() {
  const token = await getAccessToken();
  const res = await ApiClient.get<IUser>(`/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}
