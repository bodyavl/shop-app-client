import { isAxiosError } from "axios";
import ApiClient from "..";
import { IUser } from "../../interfaces";
import { getAccessToken } from "../../utils/getAccessToken";

export async function addToCart(id: number): Promise<void> {
  try {
    const token = await getAccessToken();

    const res = await ApiClient.post(
      `/auth/me/cart/${id}/add`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
}
