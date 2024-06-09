import { createContext, useContext, useEffect, useState } from "react";
import { signIn } from "../services/auth/signIn";
import { IUser } from "../interfaces";
import getUser from "../utils/getUser";
import setUser from "../utils/setUser";
import setAccessToken from "../utils/setAccessToken";
import setRefreshToken from "../utils/setRefreshToken";

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

interface AuthProps {
  authState: {
    authenticated: boolean | null;
    user: IUser | null;
    token?: string | null;
  };
  onLogin: (username: string, password: string) => void;
  onLogout: () => void;
}

const AuthContext = createContext<AuthProps>({
  authState: { authenticated: false, user: null },
  onLogin: () => {},
  onLogout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    authenticated: boolean | null;
    user: IUser | null;
    token?: string | null;
  }>({
    authenticated: null,
    user: null,
    token: null,
  });

  useEffect(() => {
    async function getUserData() {
      const user = await getUser();
      console.log(user);

      if (user) {
        setAuthState({
          authenticated: true,
          user,
        });
      } else {
        setAuthState({
          authenticated: false,
          user: null,
        });
      }
    }
    getUserData();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const res = await signIn(username, password);

      setAuthState({
        authenticated: true,
        user: res.user,
      });

      await setUser(res.user);
      await setAccessToken(res.token);
      await setRefreshToken(res.refreshToken);
    } catch (error) {
      alert("Wrong username or password!");
    }
  };

  const logout = async () => {
    setAuthState({
      authenticated: false,
      user: null,
    });
  };

  const value = {
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
