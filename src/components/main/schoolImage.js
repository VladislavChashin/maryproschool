import { schoolImage } from "./data/course";
import strelkaRight from '../../source/images/index/arrowRight.svg'
import strelkaLeft from '../../source/images/index/arrowLeft.svg'
import { useState } from "react";

export default function SchoolImage(){
    const [rotate, setRotate] = useState(0)
    const updateIndex = (counter) => {
        if (rotate >= 0){
            setRotate(-1)
        }else{
            setRotate(-1)
        }
    }
    const remuveIndex = (counter) => {
        if (rotate <= 1){
            setRotate(0)
        }else{
            setRotate(counter)
        }
    }
    return(
        <>
            <div className="schoolImage">
                <div className="schoolImage_header">
                    <h2>Наша школа</h2>
                    <div className="schoolImage_navigate">
                        <img onClick={()=> remuveIndex(rotate - 1)} src={strelkaLeft} alt="" /><img onClick={()=> updateIndex(rotate + 1)} src={strelkaRight} alt="" />
                    </div>
                </div>
                <div className="schoolImage_content" style={{transform: `translateX(${rotate * 21}%)`}}>
                    {schoolImage.map(array => <img src={array.src} alt="" key={array.id} /> )}
                </div>
            </div>
        </>
    )
}