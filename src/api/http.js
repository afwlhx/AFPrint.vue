// src/api/http.js
import axios from "axios";
import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore();

const http = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`, // 按你的后端端口调整
});

// 读取/写入 Token 的小工具
const TOKEN_KEY = "access_token";
export function getToken() {
    return authStore.accessToken;
    // return localStorage.getItem(TOKEN_KEY);
}
export function setToken(t) {
    authStore.accessToken = t;
    // localStorage.setItem(TOKEN_KEY, t);
}
export function clearToken() {
    authStore.accessToken = "";
    // localStorage.removeItem(TOKEN_KEY);
}

// 请求拦截：自动携带 Bearer
http.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default http;