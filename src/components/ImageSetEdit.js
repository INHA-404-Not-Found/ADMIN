import imageSet from '../styles/ImageSet.module.css';


export default function ImageSetEdit(){

    {/*이미지 셋 화면*/}
    return (
        <div>
            <div className={imageSet.Container}> 
                <img
                    className={imageSet.Icon}
                    src="./images/left.png"
                    alt="left"
                />
                
                <div className={imageSet.Image_Container}>
                    <img className={imageSet.ImageView} src="./images/햄스터.jpeg" alt="img" />
                    <img
                        className={imageSet.Trash}
                        src= "./images/trash.png"
                        onClick={() => {
                            if(window.confirm("이 사진을 삭제하시겠습니까?")){
                                alert("삭제");
                            }
                        }}
                    />
                </div>
                
                <img 
                    className={imageSet.Icon}
                    src="./images/right.png"
                    alt="right"
                />
            </div>
            
            <div className={imageSet.UploadBtn}>
                <button>
                    <img 
                        style={{ height: "25px" }}
                        src="./images/upload.png" alt="upload"
                    />
                    <div>사진 업로드</div>
                </button>
            </div>
        </div>
    )
}