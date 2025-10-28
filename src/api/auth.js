import api from "../api.js";
import { axios } from 'axios';


export const login = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const signup = async (email, password, name) => {
  const response = await axios.post("/auth/signup", { email, password, name });
  return response.data;
};


export const Logout = async () => {
    try {
        await api.delete('/v1/token'); // axios -> api 로 변경

        alert("로그아웃 성공");
        console.log("로그아웃 성공");
        TokenStore.clearToken();

        navigate('/login');
    } catch (err) {
        console.error('에러 발생:', err);
        alert("로그아웃 실패");
    }
};