import { isAxiosError } from "axios";
import ApiClient from "..";
import { IUser } from "../../interfaces";
import { getAccessToken } from "../../utils/getAccessToken";

export async function removeFromCart(id: number): Promise<void> {
  try {
    const token = await getAccessToken();

    const res = await ApiClient.delete(`/auth/me/cart/${id}/remove`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
