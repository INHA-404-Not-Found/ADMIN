import AdminManagement from "../admin/AdminManagement";
import styles from "../styles/Main.module.css";

import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 5fr",
                gap: "20px",

                height: "100%"
            }}
        >
            {/*왼쪽 메뉴*/}
            <div style={{margin:"0 10%"}}>
                {/*로고*/}
                <div className={styles.Logo_Container}>
                    <img
                        src="./images/INHA_logo.png"
                        style={{ height:"50px" }}
                    />

                    <div>
                        <div style={{ fontFamily: "Pretendard-SemiBold", fontSize:"20px" }}>
                            분실물 찾기
                        </div>
                        <div style={{ fontFamily: "Pretendard-Medium", fontSize:"13px" }}>관리자 페이지</div>
                    </div>
                </div>

                <br></br>

                {/*메뉴*/}
                <div className={styles.Menu_Container}>
                    <img src="./images/user.png" alt="user" />
                    <div>김도담(12234069)</div>

                    <img src="./images/logout.png" alt="logout" />
                    <div><Link to="/login">로그아웃</Link></div>

                    <img src="./images/dashboard.png" alt="dashboard" />
                    <div><Link to="/">Dashboard</Link></div>

                    <img src="./images/add.png" alt="add" />
                    <div><Link to="/postRegist">게시글 작성</Link></div>

                    {/*관리자만 보이게*/}
                    <img src="./images/adminManage.png" alt="adminManage" />
                    <div><Link to="/adminManagement">관리자 관리</Link></div>
                </div>
            </div>
            
            {/*메인보드*/}
            <AdminManagement />
        </div>
    )

}