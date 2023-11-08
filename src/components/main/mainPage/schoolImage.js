import { schoolImage } from "../data/course";
import strelkaRight from '../../../source/images/index/arrowRight.svg'
import strelkaLeft from '../../../source/images/index/arrowLeft.svg'
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import './styles/schoolImage.scss';

export default function SchoolImage(){
   const [activi, setActive] = useState(1)
    return(
        <>
            <div className="schoolImage">
                <div className="schoolImage_header">
                    <h2>У нас 2 филиала</h2>
                </div>
                <div className="bottom_block">
                        <a className = {activi == 1 ? 'active' : ''} onClick={() => setActive(1)}>г. Чехов, ул. Полиграфистов 1с2</a><a className = {activi == 2 ? 'active' : ''} onClick={() => setActive(2)}>г. Чехов, мкр. Губернский, ул. Земская, д.3</a>
                    </div>
                <div className="schoolImage_content" >
                        {schoolImage.map(array => <img src={array.src} alt="" key={array.id} /> )} 
                </div>
            </div>
        </>
    )
}