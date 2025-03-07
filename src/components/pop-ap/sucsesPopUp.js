import galochka from '../../source/images/index/galochka.svg'
import './styles/sucses.scss'
import {useSelector, useDispatch } from 'react-redux'
import {incrementSucses, dataIncrement } from '../header/modalReduser'
import { useCallback, useEffect } from 'react'
export default  function SucsesPopUp() {
    const count = useSelector(state => state.counter.valueSucses)
    const dispatch = useDispatch()

    const unlockScroll = useCallback(() => {
        document.body.style.overflow = ""
    }, [])

    return(
        <div onClick={()=> {dispatch(incrementSucses()); unlockScroll(); dispatch(dataIncrement({dataLang: null, dataLess: null, dataTeach: null}))}}className="modalWraper wow animate__animated animate__fadeIn" style={count === true ? {display: 'flex'}: {display: 'none'}}>
            <div className="sucsesPopUp">
                <img src={galochka} alt="" />
                <div className="description">
                    <h1>Успешно!</h1>
                    <p>С вами скоро свяжется наш менеджер, чтобы обсудить время и дату занятия</p>
                </div>
            </div>
        </div>
    )
}