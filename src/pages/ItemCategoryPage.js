import ItemCategory from "../admin/ItemCategory";
import Main from "../admin/Main";
import Logo from "../components/Logo";
import MenuPage from "../components/MenuPage";
import styles from "../styles/Main.module.css";

import { Link } from "react-router-dom";

export default function ItemCategoryPage() {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "2fr 9fr",
                height: "100%"
            }}
        >
            {/*왼쪽 메뉴*/}
            <div
                style={{
                    background: "#fafafa",
                    border: "1px solid #ddd",
                    boxShadow: "inset -5px 0 8px rgba(0, 0, 0, 0.15)"
                }}
            >
                <div style={{margin: "0 5% 0 10%" }}>
                    {/*로고*/}
                    <Logo />

                    <br></br>

                    {/*메뉴*/}
                    <MenuPage />
                </div>
            </div>
            
            {/*메인보드*/}
            <ItemCategory />
        </div>
    )

}