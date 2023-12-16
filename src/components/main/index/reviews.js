import strelka from '../../../source/images/index/Arrow.svg'
import women from '../../../source/images/main/otzivWomen.png'
import './styles/reviews.scss';
import { useState, useEffect, useRef } from "react";
import {useSwiper} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Swiper from "react-id-swiper";
import 'swiper/css';

export default function Reviews(){
    const [width, setWidth] = useState(window.innerWidth);
    const [rotate, setRotate] = useState(0)
    const swiper = useSwiper();
    const ref = useRef(null);

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
        ref.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
        ref.current.swiper.slidePrev();
        }
    };

    useEffect(() => {
      const handleResize = (event) => {
        setWidth(event.target.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

 

    const updateIndex = (counter) => {
        if (counter >= 3 ){
            setRotate(0)
        }else{
            setRotate(counter)
        }
    }
    const remuveIndex = (counter) => {
        if (rotate <= 1){
            setRotate(0)
        }else{
            setRotate(counter)
        }
    }
    const params = {
        slidesPerView: 'auto',
        spaceBetween: 5,
        slidesPerView: 1,
        slidesOffsetBefore: 0,
        modules: Navigation,
        // autoHeight: true,
        breakpoints: {
            374: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            500: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },
            700: {
                slidesPerView: 1.6,
                spaceBetween: 15,
            },
            1000: {
                slidesPerView: 2.23,
                spaceBetween: 20,
                slidesOffsetBefore: 2 / 100 * width,

            },
            1599: {
                slidesPerView: 2.23,
                spaceBetween: 20,
                slidesOffsetBefore: 8.9 / 100 * width,

            },
            1921: {
                slidesPerView: 3.3,
                spaceBetween: 20,
                slidesOffsetBefore: 19.5 / 100 * width,

            },
        }
      };


    return(
        <>
            <div className="reviews ">
                <div className="reviews_header">
                    <h2>Отзывы</h2>
                    <div className="reviews_navigate">
                        <div onClick={() => goPrev()}><img  src={strelka} alt="" /></div><div onClick={()=> goNext()}><img  src={strelka} alt="" /></div>
                    </div>
                </div>
                
                <div className="reviews_content" >
                    <Swiper {...params} ref={ref}>
                        <div className="wow animate__animated animate__fadeIn"><ReviewBlocks/></div> 
                        <div className="wow animate__animated animate__fadeIn"><ReviewBlocks/></div> 
                        <div className="wow animate__animated animate__fadeIn"><ReviewBlocks/></div> 
                    </Swiper>
                </div>
                <a>Читать все отзывы</a>
            </div>
        </>
    )
}

function ReviewBlocks(){
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
    return(
        <>
            <div className="reviews_reviewBlock" >
                <div className="reviewBlock_info">
                    <img src={women} alt="" />
                    <div className="info_name">
                        <p>Елена Пономарева</p>
                        <p>г. Чехов</p>
                    </div>
                </div>
                <div className="reviewBlock_description">
                    <h5>Поступила в Академию внешней торговли <br/> с высоким баллом</h5>
                    <p>Павел Зиновьевич отлично подает грамматическую систему языка, <br />
                        лексическое наполнение для каждого уровня, а также готовит к международным экзаменам в соответствии с их структурой. Повезло заниматься с ним еще в обычной школе <br />
                        и индивидуально, а также на групповых занятиях для подготовки к экзамену FCE, <br />
                        который сдала с первого раза. <br />
                        Через год поступила в Академию внешней торговли с высоким баллом по английскому <br />
                        без подготовки</p>
                </div>
            </div>
        </>
    )
}