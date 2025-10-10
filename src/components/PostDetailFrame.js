import GainTable from "../admin/GainTable";
import LossTable from "../admin/LossTable";
import GainTableEdit from "../admin/GainTableEdit";
import LossTableEdit from "../admin/LossTableEdit";
import ImageSet from "../admin/ImageSet";
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
                    <div>습득 / 분실</div>
                    <div><Link to="/"><img src="./images/close.png" alt="close" /></Link></div>
                </div>
                
                {/*게시글의 이미지들*/}
                <div>
                    <ImageSet />
                </div>

                <div>
                    <GainTable />
                    {/*<LossTable />*/}
                </div>
                
                <button><Link to="/postDetailFrameEdit">수정하기</Link></button>
            </div>
        </div>   
    )

}