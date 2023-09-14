import './styles/headerPopAp.scss'
import Close from '../../source/images/header/Close.svg'
import strelka from '../../source/images/index/strelka_big.svg'
import arrowDown from '../../source/images/header/arrow-down.svg'
import {useCallback } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {increment } from '../header/modalReduser'

export default  function PopApCourse(){
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    const unlockScroll = useCallback(() => {
        document.body.style.overflow = ""
    }, [])

    return(
        <div className="modalWraper" style={count === true ? {display: 'flex'}: {display: 'none'}}>
            <div className="headerPopAp">
                <div className="headerPopAp_header">
                    <p>Запись на пробное занятие</p>
                    <img src={Close} alt="" onClick={()=> {dispatch(increment()); unlockScroll()}}/>
                </div>
                <div className="choose">
                    <button>Выберите язык <img src={arrowDown} alt="" /></button>
                    <button>Выберите преподователя <img src={arrowDown} alt="" /></button>
                    <button>Выберите тип занятия <img src={arrowDown} alt="" /></button>
                    
                    <input type="text" placeholder="Ваше имя"/>
                    <input type="text" placeholder="Номер телефона"/>
                </div>
                <a href="">Записаться <img src={strelka} alt="" /></a>
            </div>
        </div>
        
    )
}