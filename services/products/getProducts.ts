import axios from "axios";
import ApiClient from "..";
import { IProduct } from "./types";
import { Pagination } from "../../interfaces";

export async function getProducts() {
  const res = await ApiClient.get<Pagination<IProduct>>(`/products`);

  return res.data;
}
