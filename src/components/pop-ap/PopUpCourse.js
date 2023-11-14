import './styles/headerPopAp.scss'
import Close from '../../source/images/header/Close.svg'
import strelka from '../../source/images/index/strelka_blue.svg'
import arrowDown from '../../source/images/header/arrow-down.svg'
import {useCallback, useState } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {increment, dataIncrement, incrementSucses } from '../header/modalReduser'

export default  function PopApCourse(){
    const count = useSelector(state => state.counter.value)
    const dataLang = useSelector(state => state.counter.dataLang)
    const dataLess = useSelector(state => state.counter.dataLess)
    const dataTeach = useSelector(state => state.counter.dataTeach)
    const dispatch = useDispatch()

    const [dropdown, setDropdown] = useState(0)
    console.log(dataLang === 'eng');

    

    const unlockScroll = useCallback(() => {
        document.body.style.overflow = ""
    }, [])

    return(
        <div className="modalWraper wow animate__animated animate__fadeIn" style={count === true ? {display: 'flex'}: {display: 'none'}}>
            <div className="headerPopAp">
                <div className="headerPopAp_header">
                    <p>Запись на пробное занятие</p>
                    <img src={Close} alt="" onClick={()=> {dispatch(increment()); dispatch(dataIncrement({ dataLang: NaN, dataLess: NaN, dataTeach: NaN})); unlockScroll()}}/>
                </div>
                <div className="choose">
                    <div className="dropdown">
                        <div className = {`button ${(dataLang && dropdown == 1) ? 'active focus_one': dataLang ? 'active' : dropdown == 1 ? 'focus_one': ''}`} >
                            <a onClick={()=>{setDropdown(dropdown == 1 ? 0 : 1)}}> 
                                {dataLang=='eng' ? 'Английский' : dataLang=='italy'? 'Итальянский': dataLang=='franch'? 'Французкий': 'Выберите язык'}
                            </a>
                            <img onClick={() => {dispatch(dataIncrement({ dataLang: NaN, dataLess: dataLess, dataTeach: dataTeach})); setDropdown(0)}}src={dataLang ? Close :arrowDown} alt="" />
                        </div>
                                
                                
                        <div className={`wow animate__animated animate__fadeIn dropdown-content_one ${dropdown == 1 ? 'active' : ''}`}>
                            <a onClick={() => (dispatch(dataIncrement({ dataLang: 'eng', dataLess: dataLess, dataTeach: dataTeach})), setDropdown(0))}>Английский</a>
                            <a onClick={() => (dispatch(dataIncrement({ dataLang: 'italy', dataLess: dataLess, dataTeach: dataTeach})), setDropdown(0))}>Итальянский</a>
                            <a onClick={() => (dispatch(dataIncrement({ dataLang: 'franch', dataLess: dataLess, dataTeach: dataTeach})), setDropdown(0))}>Французкий</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className = {`button ${(dataTeach && dropdown == 2) ? 'active focus_two': dataTeach ? 'active' : dropdown == 2 ? 'focus_two': ''}`} >
                            <a onClick={()=>{setDropdown(dropdown == 2 ? 0 : 2)}}> 
                                {dataTeach ? dataTeach: 'Выберите преподавателя'}
                            </a>
                            <img onClick={() => {dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: NaN})); setDropdown(0)}}src={dataTeach ? Close :arrowDown} alt="" />
                        </div>
                        <div className={`wow animate__animated animate__fadeIn dropdown-content_two ${dropdown == 2 ? 'active' : ''}`}>
                            <a onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: 'Мария Павловна Кричевская'})), setDropdown(0))}>Мария Павловна Кричевская</a>
                            <a style={dataLang === 'italy'? {display: 'none'} : {}} onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: 'Ксения Александровна Лагутина'})), setDropdown(0))}>Ксения Александровна Лагутина</a>
                            <a style={dataLang === 'franch'? {display: 'none'} : {}} onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: 'Анастасия Юрьевна Болотова'})), setDropdown(0))}>Анастасия Юрьевна Болотова</a>
                            <a style={dataLang === 'franch' || dataLang === 'italy'? {display: 'none'} : {}} onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: 'Павел Зиновьевич Кричевский'})), setDropdown(0))}>Павел Зиновьевич Кричевский</a>
                            <a style={dataLang === 'franch' || dataLang === 'italy'? {display: 'none'} : {}} onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: 'Джамиля Аслановна Иванова'})), setDropdown(0))}>Джамиля Аслановна Иванова</a>
                            <a style={dataLang === 'franch' || dataLang === 'italy'? {display: 'none'} : {}} onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: 'Юлия Дмитриевна Колобова'})), setDropdown(0))}>Юлия Дмитриевна Колобова</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className = {`button ${(dataLess && dropdown == 3) ? 'active focus_three': dataLess ? 'active' : dropdown == 3 ? 'focus_three': ''}`} >
                            <a onClick={()=>{setDropdown(dropdown == 3 ? 0 : 3)}}> 
                                {dataLess ? dataLess : 'Выберите занятие'}
                            </a>
                            <img onClick={() => {dispatch(dataIncrement({ dataLang: dataLang, dataLess: NaN, dataTeach: dataTeach})); setDropdown(0)}}src={dataLess ? Close :arrowDown} alt="" />
                        </div>
                        <div className={`wow animate__animated animate__fadeIn dropdown-content_three ${dropdown == 3 ? 'active' : ''}`}>
                            <a onClick={() => (dispatch(dataIncrement({ dataLess: 'Занятия в групе', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Занятия в группе</a>
                            <a onClick={() => (dispatch(dataIncrement({ dataLess: 'Для путешествий', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Для путешествий</a>
                            <a onClick={() => (dispatch(dataIncrement({ dataLess: 'Индивидуальные занятия', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Индивидуальные занятия</a>
                            <a style={dataLang === 'eng' || dataLang === 'franch' || dataLang == NaN? {} : {display: 'none'}} onClick={() => (dispatch(dataIncrement({ dataLess: 'SPEAKING CLUB', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Speaking Club</a>
                            <a style={dataLang === 'italy' || dataLang == NaN ? {} : {display: 'none'}} onClick={() => (dispatch(dataIncrement({ dataLess: 'ПОДГОТОВКА К CILS', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Подготовка к CILS</a>
                            <a style={dataLang === 'eng' || dataLang == NaN ? {} : {display: 'none'}} onClick={() => (dispatch(dataIncrement({ dataLess: 'ПОДГОТОВКА К ЭКЗАМЕНАМ', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Подготовка к экзаменам</a>
                        </div>
                    </div>
                    
                    <input type="name" maxLength='11' placeholder="Ваше имя"/>
                    <input type="tel" placeholder="Номер телефона"/>
                </div>
                <a className='but'onClick={()=> {dispatch(increment());   dispatch(incrementSucses())}}>Записаться <img src={strelka} alt="" /></a>
            </div>
        </div>
        
    )
}

// function Dropdown(props){
//     const dispatch = useDispatch()
//     const dates = props.data
//     const [s, setS] = useState(dates)
//     console.log(s);
//     const [stat, setStat] = useState(props.stat)
//     return(
//         <div className="dropdown">
//             <button className = {props.stat} onClick={()=>setDropdown(setDropdown => !setDropdown)}> {dates=='eng' ? 'Английский' : dates=='italy'? 'Итальянский': dates=='franch'? 'Французкий': dates} <img src={props.stat == 'active' ? Close :arrowDown} alt="" /></button>
//             <div className={`dropdown-content ${dropdown ? 'active' : ''}`}>
//                 <a onClick={() => dispatch(increment({ dataLang: 'eng'}))}>Английский</a>
//                 <a onClick={() => dispatch(increment({ dataLang: 'italy'}))}>Итальянский</a>
//                 <a>Французкий</a>
//             </div>
//         </div>
        
        
//     )
// }