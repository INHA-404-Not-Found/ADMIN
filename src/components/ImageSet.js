import imageSet from '../styles/ImageSet.module.css';


export default function ImageSet(){

    {/*이미지 셋 화면*/}
    return (
        <div className={imageSet.Container}> 
            <img
                className={imageSet.Icon}
                src="./images/left.png"
                alt="left"
            />
            
            <div className={imageSet.Image_Container}>
                <img src="./images/" alt="img" />
            </div>
            
            <img 
                className={imageSet.Icon}
                src="./images/right.png"
                alt="right"
            />
        </div>
    )
}