import { useState } from "react";
import styles from "../styles/Main.module.css";

import { Link } from "react-router-dom";
import PopUpFrame from './PopUpFrame';

export default function MenuPage() {
    const [showPopUp, setShowPopUp] = useState(false);
    const [type, setType] = useState('');


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
            <div
                onClick={() => {setShowPopUp(true); setType("add lost post");}}
                style={{ cursor: "pointer" }}    
            >분실 게시글 작성</div>

            <img src="./images/add.png" alt="add" />
            <div
                onClick={() => {setShowPopUp(true); setType("add gain post");}}
                style={{ cursor: "pointer" }}    
            >습득 게시글 작성</div>

            {showPopUp && <PopUpFrame type={type} onClose={() => setShowPopUp(false)} />}
        </div>
    )
}