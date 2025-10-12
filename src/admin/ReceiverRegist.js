import GainTable from "./ReceiverRegistTable.js";
import ImageSet from "../components/ImageSet";
import ReceiverRegistTable from "./ReceiverRegistTable.js";

export default function ReceiverRegist ({ onClose }) {
    return (
        <div>
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "8px",
                    marginBottom: "15px",
                }}
            >
                <div style={{ fontWeight: "bold" }}>수령인 등록</div>

                <div>
                    <img
                        src="./images/close.png"
                        alt="close"
                        onClick={onClose}
                        style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                        }}
                    />
                </div>
            </div>

            <div
                style={{
                    fontFamily:"Pretendard-Thin",
                    textAlign:"left",
                    margin: "5px 0 10px"
                }}
            >
                * 수령을 완료하려면 수령인의 정보를 입력해야합니다.
            </div>

            {/* 게시글 내용 */}
            <div style={{ marginBottom: "20px" }}>
                <ReceiverRegistTable />
            </div>

            {/* 수정 버튼 */}
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px"
                }}
            >
                <button
                    style={{
                        backgroundColor: "white",
                        color: "#215294",
                        border: "1px solid #215294",
                        borderRadius: "8px",
                        padding: "8px 40px",
                        cursor: "pointer",
                    }}
                    onClick={onClose}
                >
                    취소하기
                </button>

                <button
                    style={{
                        backgroundColor: "#215294",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        padding: "8px 40px",
                        cursor: "pointer",
                    }}
                >
                    등록하기
                </button>
            </div>
        </div>
    );
}