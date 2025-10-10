import Main from "../admin/Main";
import Logo from "../components/Logo";
import MenuPage from "../components/MenuPage";
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
                <Logo />

                <br></br>

                {/*메뉴*/}
                <MenuPage />
            </div>
            
            {/*메인보드*/}
            <Main />
        </div>
    )

}