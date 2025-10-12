import { Link } from "react-router-dom";
import ImageSet from "../components/ImageSet";
import LostTableEdit from "./LostTableEdit";

export default function LostPostEdit ({ onClose, setType }) {
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
                <div style={{ fontWeight: "bold" }}>분실 게시물 수정</div>
                
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

            {/* 이미지 영역 */}
            <div style={{ marginBottom: "20px" }}>
                <ImageSet />
            </div>

            {/* 게시글 내용 */}
            <div style={{ marginBottom: "20px" }}>
                <LostTableEdit />
            </div>

            {/* 수정 버튼 */}
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
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
                    onClick={() => { setType("lost post"); }}
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
                    수정 저장하기
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
                    삭제하기
                </button>
            </div>
        </div>
    );
}