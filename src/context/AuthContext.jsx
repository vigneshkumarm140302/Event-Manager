import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token") || null
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refresh_token") || null
  );

  const api = axios.create({
    baseURL: backendUrl,
  });

  const getNweToken = async () => {
    try {
      const responce = await axios.post(`${backendUrl}/api/token/refresh/`, {
        refresh: refreshToken,
      });
      if (responce.status === 200) {
        setAccessToken(responce.data.access);
        localStorage.setItem("access_token", responce.data.access);
        return responce.data.access;
      } else {
        console.log(responce);
      }
    } catch (error) {
      console.log(error);
    }
  };
  api.interceptors.request.use(
    async (config) => {
      let token = localStorage.getItem("access_token");

      if (token) {
        const decode = jwtDecode(token);
        const now = Date.now() / 1000;
        if (decode.exp < now) {
          token = await getNweToken();
        }
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      return config;
    },
    async (error) => {
      console.log(error);
      return Promise.reject(error);
    
    }
  );

  const value = { backendUrl, navigate, api };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
