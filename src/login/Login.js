import styles from "../styles/Login.module.css";

import { Link } from "react-router-dom";

export default function Login() {

    return (
        <div className={styles.Part}>
            {/*로고*/}
            <div className={styles.Logo_Container}>
                <img
                    src="./images/INHA_logo.png"
                    style={{ height:"110px" }}
                />
                
                <div style={{ margin: "auto 0" }}>
                    <div
                        style={{ fontFamily: 'Pretendard-Bold', fontSize:"40px" }}
                    >
                        분실물 찾기
                    </div>
                    <div style={{ fontFamily: 'Pretendard-SemiBold', fontSize:"25px" }}>
                        관리자 페이지
                    </div>
                </div>
            </div>
            
            {/*로그인*/}
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('Sign In!');
                    }}
                >
                    {/*학번 입력*/}
                    <div className={styles.Input_Label_Container}>
                        <div>학번</div>
                        <input
                            type="text"
                            className={styles.Input_txt} 
                            placeholder="value"
                        />
                    </div>
                    
                    {/*비밀번호 입력*/}
                    <div className={styles.Input_Label_Container}>
                        <div>비밀번호</div>
                        <input
                            type="text"
                            className={styles.Input_txt} 
                            placeholder="value"
                        />
                    </div>

                    <div>
                        <Link to="/">
                            <input
                                type="submit"
                                className={styles.Btn} 
                                value="Sign In"
                            />
                        </Link>
                    </div>
                </form>
            </div>
        </div>   
    )

}