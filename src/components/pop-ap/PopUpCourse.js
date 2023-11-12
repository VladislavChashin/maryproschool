import './styles/headerPopAp.scss'
import Close from '../../source/images/header/Close.svg'
import strelka from '../../source/images/index/strelka_blue.svg'
import arrowDown from '../../source/images/header/arrow-down.svg'
import {useCallback, useState } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {increment, dataIncrement } from '../header/modalReduser'

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
        <div className="modalWraper" style={count === true ? {display: 'flex'}: {display: 'none'}}>
            <div className="headerPopAp">
                <div className="headerPopAp_header">
                    <p>Запись на пробное занятие</p>
                    <img src={Close} alt="" onClick={()=> {dispatch(increment()); unlockScroll()}}/>
                </div>
                <div className="choose">
                    {/* <Dropdown data = {dataLang ? dataLang: 'Выберите язык' } stat={dataLang ? 'active' : ''} count={['Английский', 'Итальянский', 'французкий']}/>
                    <Dropdown data = {'Выберете преподавателя'} count={['Английский', 'Итальянский', 'французкий', 'французкий']}/>
                    <Dropdown data = {dataLess ? dataLess: 'Выберите занятие' } stat={dataLess ? 'active' : ''} count={['Английский', 'Итальянский', 'французкий','французкий','французкий']}/>  */}
                    <div className="dropdown">
                        <button className = {dataLang ? 'active' : dropdown == 1 ? 'focus_one' : ''} 
                                onClick={()=>setDropdown(dropdown == 1 ? 0 : 1)}>

                                {dataLang=='eng' ? 'Английский' : dataLang=='italy'? 'Итальянский': dataLang=='franch'? 'Французкий': 'Выберите язык'}
                                
                                <img onClick={() => (dispatch(dataIncrement({ dataLang: NaN, dataLess: dataLess, dataTeach: dataTeach})), setDropdown(0))}src={dataLang ? Close :arrowDown} alt="" /></button>
                        <div className={`dropdown-content_one ${dropdown == 1 ? 'active' : ''}`}>
                            <a onClick={() => (dispatch(dataIncrement({ dataLang: 'eng', dataLess: dataLess, dataTeach: dataTeach})), setDropdown(0))}>Английский</a>
                            <a onClick={() => (dispatch(dataIncrement({ dataLang: 'italy', dataLess: dataLess, dataTeach: dataTeach})), setDropdown(0))}>Итальянский</a>
                            <a onClick={() => (dispatch(dataIncrement({ dataLang: 'franch', dataLess: dataLess, dataTeach: dataTeach})), setDropdown(0))}>Французкий</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className = {dataTeach ? 'active' : dropdown == 2 ? 'focus_two' : ''} 
                                onClick={()=>setDropdown(dropdown == 2 ? 0 : 2)}>

                                {dataTeach ? dataTeach : 'Выберите преподавателя'}
                                
                                <img onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: NaN})), setDropdown(0))} src={dataTeach ? Close :arrowDown} alt="" /></button>
                        <div className={`dropdown-content_two ${dropdown == 2 ? 'active' : ''}`}>
                            <a onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: 'Мария Павловна Кричевская'})), setDropdown(0))}>Мария Павловна Кричевская</a>
                            <a onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: 'Ксения Александровна Лагутина'})), setDropdown(0))}>Ксения Александровна Лагутина</a>
                            <a onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: 'Анастасия Юрьевна Болотова'})), setDropdown(0))}>Анастасия Юрьевна Болотова</a>
                            <a onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: 'Павел Зиновьевич Кричевский'})), setDropdown(0))}>Павел Зиновьевич Кричевский</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className = {dataLess ? 'active' : dropdown == 3 ? 'focus_three' : ''} 
                                onClick={()=>setDropdown(dropdown == 3 ? 0 : 3)}>

                                {dataLess ? dataLess : 'Выберите занятие'}
                                
                                <img onClick={() => (dispatch(dataIncrement({ dataLang: dataLang, dataLess: NaN, dataTeach: dataTeach})), setDropdown(0))} src={dataLess ? Close :arrowDown} alt="" /></button>
                        <div className={`dropdown-content_three ${dropdown == 3 ? 'active' : ''}`}>
                            <a onClick={() => (dispatch(dataIncrement({ dataLess: 'Занятия в групе', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Занятия в групе</a>
                            <a onClick={() => (dispatch(dataIncrement({ dataLess: 'Для путешествий', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Для путешествий</a>
                            <a onClick={() => (dispatch(dataIncrement({ dataLess: 'Индивидуальные занятия', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Индивидуальные занятия</a>
                            <a style={dataLang === 'eng' || dataLang === 'franch' || dataLang == NaN? {} : {display: 'none'}} onClick={() => (dispatch(dataIncrement({ dataLess: 'SPEAKING CLUB', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>SPEAKING CLUB</a>
                            <a style={dataLang === 'italy' || dataLang == NaN ? {} : {display: 'none'}} onClick={() => (dispatch(dataIncrement({ dataLess: 'ПОДГОТОВКА К CILS', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>ПОДГОТОВКА К CILS</a>
                            <a style={dataLang === 'eng' || dataLang == NaN ? {} : {display: 'none'}} onClick={() => (dispatch(dataIncrement({ dataLess: 'ПОДГОТОВКА К ЭКЗАМЕНАМ', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>ПОДГОТОВКА К ЭКЗАМЕНАМ</a>
                        </div>
                    </div>
                    
                    <input type="name" maxlength='11' placeholder="Ваше имя"/>
                    <input type="tel" placeholder="Номер телефона"/>
                </div>
                <a href="">Записаться <img src={strelka} alt="" /></a>
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