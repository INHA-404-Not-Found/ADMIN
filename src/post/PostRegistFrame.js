import GainPostRegistTable from "./GainPostRegistTable";
import LossPostRegistTable from "./LossPostRegistTable";
import ImageSetEdit from "../admin/ImageSetEdit";

import { Link } from "react-router-dom";

export default function Login() {

    return (
        <div
            style={{
                backgroundColor: "rgba(137, 137, 137, 0.3)"
            }}
        >
            {/*게시글 상세페이지 틀*/}
            <div
                style={{
                    backgroundColor: "white",
                }}
            >
                {/*Header*/}
                <div>
                    <div>습득 / 분실 게시글 작성</div>
                    <div><Link to="/"><img src="./images/close.png" alt="close" /></Link></div>
                </div>
                
                {/*게시글의 이미지들*/}
                <div>
                    <ImageSetEdit />
                </div>

                {/*게시글 정보 테이블*/}
                <div>
                    <GainPostRegistTable />
                    {/*<LossPostRegistTable />*/}
                </div>
                
                <button><Link to="/">저장하기</Link></button>
            </div>
        </div>   
    )

}