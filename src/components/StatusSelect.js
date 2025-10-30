import { useEffect, useState } from "react";
import PopUpFrame from "./PopUpFrame";
import { modifyPost, modifyPosts } from './../api/post';

export default function StatusSelect({ status, type, postId }) {
    const [statusType, setStatusType] = useState("미완료");   // 기존 상태
    const [tempStatus, setTempStatus] = useState("");         // 팝업에서 임시 상태
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        if (status === "UNCOMPLETED") setStatusType("미완료");
        else if (status === "COMPLETED") setStatusType("완료");
        else if (status === "POLICE") setStatusType("인계됨");
    }, [status]);

    const handleChange = (e) => {
        const value = e.target.value;

        if (value === "완료" && type === "FIND") {
            setTempStatus(value);   // 팝업에서 확인할 값
            setShowPopUp(true);     // 팝업 열기
        } else {
            setStatusType(value);   // 바로 상태 변경
            modifyPosts(
                Array.isArray(postId) ? postId : [postId], 
                    value === "완료"
                    ? "COMPLETED"
                    : value === "미완료"
                    ? "UNCOMPLETED"
                    : value === "인계됨"
                    ? "POLICE"
                    : ""
            );
        }
    };

    const handleSave = () => {
        setStatusType(tempStatus); // 저장 시 실제 상태 변경
        setShowPopUp(false);       // 팝업 닫기

        modifyPosts(
            Array.isArray(postId) ? postId : [postId], 
                tempStatus === "완료"
                ? "COMPLETED"
                : tempStatus === "미완료"
                ? "UNCOMPLETED"
                : tempStatus === "인계됨"
                ? "POLICE"
                : ""
        );
    };

    const handleClose = () => {
        setShowPopUp(false);       // 팝업 닫기만, 상태 변경 없음
    };

    return (
        <>
            <select
                style={{ padding: "2px 7px", borderRadius: "5px" }}
                value={statusType}
                onChange={handleChange}
            >
                <option value="미완료">미완료</option>
                <option value="완료">완료</option>
                <option value="인계됨">인계됨</option>
            </select>

            {showPopUp && <PopUpFrame type="regist receiver" postId={postId} onSave={handleSave} onClose={handleClose} /> }
        </>
    );
}
