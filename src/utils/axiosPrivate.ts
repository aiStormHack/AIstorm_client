import axios, { AxiosInstance } from "axios";

export const axiosPrivate: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AGENT_URL,
  withCredentials: true,
});
