import { MY } from "../assets/MY.js";
import { TokenStore } from "../TokenStore.js";
import api from "./api.js";
import axios from 'axios';


export const login = async (studentId, password, navigate) => {
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

        TokenStore.setToken(res.data.accessToken);

        // console.log(res.data);
        console.log("로그인 성공");

        // profile();

        navigate('/');
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("로그인 실패");
    }
};


export const logout = async (navigate) => {
    console.log("logout start");

    try {
        await api.post('/auth/logout');

        TokenStore.clearToken();

        alert("로그아웃 성공");
        console.log("로그아웃 성공");

        navigate('/login');

    } catch (err) {
        console.error('에러 발생:', err);
        alert("로그아웃 실패");
    }
};


// 토큰을 통한 회원 정보 조회
export const profile = async () => {
    console.log("profile start");

    try {
        const res = await api.get('/auth/profile');

        console.log(res.data);
        MY.setMY(res.data);

        alert("회원 정보 조회");
        console.log("회원 정보 조회: " + res.data);

    } catch (err) {
        console.error('에러 발생:', err);
        alert("로그아웃 실패");
    }
};