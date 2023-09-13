import { schoolImage } from "../data/course";
import strelkaRight from '../../../source/images/index/arrowRight.svg'
import strelkaLeft from '../../../source/images/index/arrowLeft.svg'
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import './styles/schoolImage.scss';

export default function SchoolImage(){
   
    return(
        <>
            <div className="schoolImage">
                <div className="schoolImage_header">
                    <h2>Наша школа</h2>
                    <div className="schoolImage_navigate">
                        <img  src={strelkaLeft} alt="" /><img src={strelkaRight} alt="" />
                    </div>
                </div>
                <div className="schoolImage_content" >
                        {schoolImage.map(array => <img src={array.src} alt="" key={array.id} /> )} 
                </div>
            </div>
        </>
    )
}