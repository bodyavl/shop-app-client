import axios from "axios";
import ApiClient from "..";
import { IProduct } from "./types";

export async function getProductDetails(id: number) {
  const res = await ApiClient.get<IProduct>(`/products/${id}`);
  return res.data;
}
