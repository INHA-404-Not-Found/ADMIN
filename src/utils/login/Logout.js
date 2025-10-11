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