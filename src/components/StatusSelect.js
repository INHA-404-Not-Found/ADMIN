import { useEffect, useState } from "react";
import PopUpFrame from "./PopUpFrame";

export default function StatusSelect({status}) {
    const [statusType, setStatusType] = useState("미완료");   // 기존 상태
    const [tempStatus, setTempStatus] = useState("");         // 팝업에서 임시 상태
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        if (status === "UNCOMPLETED") setStatusType("미완료");
        else if (status === "COMPLETED") setStatusType("완료");
        else if (status === "TRANSFERRED") setStatusType("인계됨");
    }, [status]);

    const handleChange = (e) => {
        const value = e.target.value;

        if (value === "완료") {
            setTempStatus(value);   // 팝업에서 확인할 값
            setShowPopUp(true);     // 팝업 열기
        } else {
            setStatusType(value);   // 바로 상태 변경
        }
    };

    const handleSave = () => {
        setStatusType(tempStatus); // 저장 시 실제 상태 변경
        setShowPopUp(false);       // 팝업 닫기
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

            {showPopUp && <PopUpFrame type="regist receiver" onSave={handleSave} onClose={handleClose} /> }
        </>
    );
}
