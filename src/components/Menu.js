import { useState } from "react";
import styles from "../styles/Main.module.css";

import { Link, useLocation } from "react-router-dom";
import PopUpFrame from './PopUpFrame';

export default function MenuPage() {
    const location = useLocation();

    const [showPopUp, setShowPopUp] = useState(false);
    const [type, setType] = useState('');

    return (
        <div className={styles.Menu_Container}>
            <img src="./images/user.png" alt="user" />
            <div>김도담(12234069)</div>

            <img src="./images/logout.png" alt="logout" />
            <div><Link to="/login">로그아웃</Link></div>

            <img src="./images/dashboard.png" alt="dashboard" />
            <div>
                <Link
                    to="/"
                    style={{
                        color: location.pathname === "/" ? "#215294" : "black",
                        fontWeight: location.pathname === "/" ? "bold" : "normal",
                    }}
                >
                    Dashboard
                </Link>
            </div>

            <img src="./images/item.png" alt="item" />
            <div>
                <Link
                    to="/itemCategory"
                    style={{
                        color: location.pathname === "/itemCategory" ? "#215294" : "black",
                        fontWeight: location.pathname === "/itemCategory" ? "bold" : "normal",
                    }}
                >
                    물품 카테고리 관리
                </Link>
            </div>

            <div></div><div></div>

            <img src="./images/add.png" alt="add" />
            <div
                onClick={() => {setShowPopUp(true); setType("regist lost post");}}
                style={{ cursor: "pointer" }}    
            >분실 게시글 작성</div>

            <img src="./images/add.png" alt="add" />
            <div
                onClick={() => {setShowPopUp(true); setType("regist gain post");}}
                style={{ cursor: "pointer" }}    
            >습득 게시글 작성</div>

            {showPopUp && <PopUpFrame type={type} onClose={() => setShowPopUp(false)} />}
        </div>
    )
}