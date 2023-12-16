import women from '../../../source/images/main/womenWary.png'
import strelka from '../../../source/images/index/strelka_big.svg'
import './styles/banner.scss';
import { decrement, increment } from '../../header/modalReduser'
import { useSelector, useDispatch } from 'react-redux'
import { useCallback, useState, useEffect} from 'react';
export default function Banner(props){
    const [width, setWidth] = useState(window.innerWidth);
    const dispatch = useDispatch() 

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
            <div className="banner wow animate__animated animate__fadeIn">
                <div className="banner_content">
                    <div className="banner_text">
                        <h4>
                        {props.props}
                        </h4>
                        {width > 568 ? 
                            <p>Освойте иностранный язык с нами: <br/> коммуникативная методики, онлайн и офлайн <br/>обучение, индивидуальный и групповой формат<br/> занятий.  Начинайте сегодня!</p>
                        :
                            <p>Освойте иностранный язык с нами: <br/> инновационные методики, онлайн <br/> обучение, улучшение навыков общения. <br/> Начинайте сегодня!</p>}
                    </div>
                    <div className="banner_images">
                        <img src={women} alt="" />
                        <p>Мария Павловна Кричевская — основатель центра <br/>MaryPro School </p>
                    </div>
                </div>
                <a onClick={() => dispatch(increment())}>Записаться на пробное занятие <img src={strelka} alt="" /></a>
            </div>
        </>
    )
}