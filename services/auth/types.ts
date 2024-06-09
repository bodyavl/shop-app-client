import { IUser } from "../../interfaces";

export interface AuthResponse {
  refreshToken: string;
  token: string;
  user: IUser;
}
