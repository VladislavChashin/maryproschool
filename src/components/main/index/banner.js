import women from '../../../source/images/main/womenWary.png'
import strelka from '../../../source/images/index/strelka_big.svg'
import './styles/banner.scss';
import { decrement, increment } from '../../header/modalReduser'
import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react';
export default function Banner(){
    const dispatch = useDispatch() 
    return(
        <>
            <div className="banner wow animate__animated animate__fadeIn">
                <div className="banner_content">
                    <div className="banner_text">
                        <h4>
                        Изучайте языки <br/> с легкостью!
                        </h4>
                        <p>Освойте иностранный язык с нами: <br/> коммуникативная методики, онлайн и офлайн <br/>обучение, индивидуальный и групповой формат<br/> занятий.  Начинайте сегодня!</p>
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