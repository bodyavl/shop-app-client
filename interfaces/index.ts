import { IProduct } from "../services/products/types";

export interface IUser {
  id: number;
  email: string | null;
  provider: string;
  socialId?: string | null;
  firstName: string | null;
  lastName: string | null;
  photo?: FileEntity | null;
  role?: RoleEntity | null;
  cart: IProduct[];
  viewed: IProduct[];
  wishlist: IProduct[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface RoleEntity {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface FileEntity {
  id: string;
  path: string;
}

export interface Pagination<T> {
  data: T[];
  hasNextPage: boolean;
  maximumPages?: number;
}
