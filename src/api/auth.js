import { TokenStore } from "../TokenStore.js";
import api from "./api.js";
import axios from 'axios';


export const login = async (studentId, password) => {
    console.log("login start");
    console.log("studentId: " + studentId + " password: " + password);

    if (!studentId && !password){ alert("studentId와 password를 입력하세요."); return; }
    else {
        if (!studentId) { alert("studentId를 입력하세요."); return; }
        if (!password) { alert("password를 입력하세요."); return; }
    }

    try {
        const res = await axios.post('/api/auth/login', {
            studentId,
            password,
            isWeb: true
        });
        console.log(res.data);
        console.log("로그인 성공");
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("로그인 실패");
    }
};


export const logout = async () => {
    try {
        await api.delete('/auth/logout');

        alert("로그아웃 성공");
        console.log("로그아웃 성공");
        TokenStore.clearToken();

    } catch (err) {
        console.error('에러 발생:', err);
        alert("로그아웃 실패");
    }
};