import { schoolImage, schoolImage_two } from "../data/course";
import strelkaRight from '../../../source/images/index/arrowRight.svg'
import strelkaLeft from '../../../source/images/index/arrowLeft.svg'
import { useState, useRef, useEffect } from "react";
import Swiper from "react-id-swiper";
import 'swiper/css';
import './styles/schoolImage.scss';

export default function SchoolImage(){
   const [activi, setActive] = useState(1)
   const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        
        const handleResize = (event) => {
          setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
        
      }, []);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        console.log(`Размер блока: ${width}px x ${height}px`);
        });

        if (targetRef.current) {
        observer.observe(targetRef.current);
        }

        return () => {
        observer.disconnect();
        };
    }, []);

      const params = {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // slidesPerView: 3.3,
        // autoHeight: true,
      };

    return(
        <>
            <div className="schoolImage ">
                <div className="schoolImage_header">
                    <h2>У нас 2 филиала</h2>
                </div>
                <div className="bottom_block">
                        <a className = {activi == 1 ? 'active animate__animated animate__fadeIn' : 'animate__animated animate__fadeIn'} onClick={() => setActive(1)}>г. Чехов, ул. Полиграфистов 1с2</a><a className = {activi == 2 ? 'active animate__animated animate__fadeIn' : 'animate__animated animate__fadeIn'} onClick={() => setActive(2)}>г. Чехов, ул. Земская, д.3</a>
                    </div>
                {/* <div className="schoolImage_content" >
                        {schoolImage.map(array => <img src={array.src} alt="" key={array.id} /> )} 
                </div> */}
                <Swiper {...params}>
                        {activi == 1 ? schoolImage.map((item, idx) => (
                            // <div  key={idx} className="" style={{width: width}}>
                                <img className="wow animate__animated animate__fadeIn" ref={targetRef} src={item.src} key={idx} alt=""/>
                            // </div>
                        ))
                        :   
                            schoolImage_two.map((item, idx) => (
                            // <div  key={idx} className="" style={{width: width}}>
                                <img className='wow animate__animated animate__fadeIn' ref={targetRef} src={item.src} key={idx} alt=""/>
                            // </div>
                        ))
                        }
                </Swiper>
            </div>
        </>
    )
}