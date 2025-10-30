import { Link } from "react-router-dom";
import LostTableRegist from './LostTableRegist';
import ImageSetEdit from "../../components/ImageSetEdit";
import { useState } from "react";
import { registerPost } from "../../api/post";

export default function LostPostRegist ({ onClose }) {
    const [categories, setCategories] = useState([]);
    const [location, setLocation] = useState('');
    const [locationDetail, setLocationDetail] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    
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
                <div style={{ fontWeight: "bold" }}>분실 게시물 등록</div>
                
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
                <ImageSetEdit />
            </div>

            {/* 게시글 내용 */}
            <div style={{ marginBottom: "20px" }}>
                <LostTableRegist 
                    categories={categories}
                    setCategories={setCategories} 
                    setLocation={setLocation} 
                    setLocationDetail={setLocationDetail}
                    setTitle={setTitle}
                    setContent={setContent}
                />
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
                    onClick={() => {
                        registerPost(
                            false, 0, categories,
                            location, locationDetail, '',
                            title, content, "LOST"
                        );
                    }}
                >
                    저장하기
                </button>
            </div>
        </div>
    );
}