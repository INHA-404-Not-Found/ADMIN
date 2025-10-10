import styles from "../styles/Main.module.css";

import { Link } from "react-router-dom";

export default function MenuPage() {
    return (
        <div className={styles.Menu_Container}>
            <img src="./images/user.png" alt="user" />
            <div>김도담(12234069)</div>

            <img src="./images/logout.png" alt="logout" />
            <div><Link to="/login">로그아웃</Link></div>

            <img src="./images/dashboard.png" alt="dashboard" />
            <div><Link to="/">Dashboard</Link></div>

            <img src="./images/item.png" alt="item" />
            <div><Link to="/itemCategory">물품 카테고리 관리</Link></div>

            <img src="./images/add.png" alt="add" />
            <div><Link to="/postRegist">게시글 작성</Link></div>
        </div>
    )
}