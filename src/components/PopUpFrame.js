import GainPost from "../post/GainPost";
import GainPostEdit from "../post/GainPostEdit";
import LostPost from "../post/LostPost";

import React from "react";
import LostPostEdit from "../post/LostPostEdit";


export default function PopUpFrame({type, setType, onClose}) {

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    backgroundColor: "#F8FAFC",
                    border: "1px solid gray",
                    borderRadius: "15px",
                    width: "40%",
                    padding: "20px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)", // 살짝 그림자
                    position: "relative",
                }}
            >
                {type==="add gain post" ? "습득 게시물 등록" : ""}
                {type==="add lost post" ? "분실 게시물 등록" : ""}
                {type==="gain post" ? <GainPost onClose={onClose} setType={setType} /> : <></>}
                {type==="lost post" ? <LostPost onClose={onClose} setType={setType} /> : ""}
                {type==="gain post edit" ? <GainPostEdit onClose={onClose} setType={setType} /> : <></>}
                {type==="lost post edit" ? <LostPostEdit onClose={onClose} setType={setType} /> : ""}

            </div>
        </div>
    );
}
