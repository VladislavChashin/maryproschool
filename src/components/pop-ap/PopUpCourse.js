import './styles/headerPopAp.scss'
import Close from '../../source/images/header/Close.svg'
import strelka from '../../source/images/index/strelka_blue.svg'
import arrowDown from '../../source/images/header/arrow-down.svg'
import {useCallback, useRef, useState } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {increment, dataIncrement, incrementSucses } from '../header/modalReduser'
import emailjs, { init } from "@emailjs/browser";
import {incrementTeacher } from '../main/teachersPage/aboutTeacherReduser'

export default  function PopApCourse(){
    init("iB0P9GFFuQN87rpKe");
    const count = useSelector(state => state.counter.value)
    const dataLang = useSelector(state => state.counter.dataLang)
    const dataLess = useSelector(state => state.counter.dataLess)
    const dataTeach = useSelector(state => state.counter.dataTeach)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [letters, setLetters] = useState('');
    const dispatch = useDispatch()
    const form = useRef();
    const inputName = useRef()
    const inputTel = useRef()

    const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_xz8hpzs", "template_d6a9rk6", form.current, 'iB0P9GFFuQN87rpKe').then(
        (result) => {
        console.log(result.text);
        },
        (error) => {
        console.log(error.text);
        }
    );
    };
    const handlePhoneNumberChange = (event) => {
        const inputPhoneNumber = event.target.value;
        // Удалите все символы, кроме цифр и плюса
        const cleanedPhoneNumber = inputPhoneNumber.replace(/[^0-9+]/g, '');
        setPhoneNumber(cleanedPhoneNumber);
    };
    const handleLetterChange = (event) => {
        const inputLetters = event.target.value;
        // Удалите все символы, кроме букв
        const cleanedLetters = inputLetters.replace(/[^a-zA-Zа-яА-Я]/g, '');
        setLetters(cleanedLetters);
      };
      
    const [dropdown, setDropdown] = useState(0)

    const unlockScroll = useCallback(() => {
        document.body.style.overflow = ""
    }, [])
    // inputRef.current.value;
    
    const checFill = () =>{
        if (inputName.current.value === ''){
            inputName.current.style.borderColor  = 'red';
        } else {
            inputName.current.style.borderColor  = '#60bfe1';
        }
        if (inputTel.current.value === ''){
            inputTel.current.style.borderColor  = 'red';
        } else {
            inputTel.current.style.borderColor  = '#60bfe1';
        }
        if (inputName.current.value !== '' && inputTel.current.value !== ''){
            dispatch(increment());   
            dispatch(incrementSucses())
        }
                
    }

    return(
        <div className="modalWraper wow animate__animated animate__fadeIn" style={count === true ? {display: 'flex'}: {display: 'none'}}>
            <div className="headerPopAp">
                <div className="headerPopAp_header">
                    <p>Запись на пробное занятие</p>
                    <img src={Close} alt="" onClick={()=> {dispatch(increment()); dispatch(dataIncrement({ dataLang: null, dataLess: null, dataTeach: null})); unlockScroll()}}/>
                </div>
                <form className="choose" onSubmit={handleSubmit} ref={form}>
                    <div className="chooses">
                        <div className="dropdown">
                            <div className = {`button ${(dataLang && dropdown == 1) ? 'active focus_one': dataLang ? 'active' : dropdown == 1 ? 'focus_one': ''}`} >
                                <a onClick={()=>{setDropdown(dropdown == 1 ? 0 : 1)}}> 
                                    {dataLang=='eng' ? 'Английский' : dataLang=='italy'? 'Итальянский': dataLang=='franch'? 'Французкий': 'Выберите язык'}
                                </a>
                                <img onClick={() => {dispatch(dataIncrement({ dataLang: null, dataLess: dataLess, dataTeach: dataTeach})); setDropdown(0)}}src={dataLang ? Close :arrowDown} alt="" />
                            </div>
                                    
                                    
                            <div className={` dropdown-content_one ${dropdown == 1 ? 'active slide-bottom' : ''}`}>
                                <a onClick={() => (dispatch(dataIncrement({ dataLang: 'eng', dataLess: dataLess, dataTeach: dataTeach})), setDropdown(0))}>Английский</a>
                                <a style={dataTeach === 'Анастасия Юрьевна Болотова' || dataTeach === null ? {} : {display: 'none'}} onClick={() => (dispatch(dataIncrement({ dataLang: 'italy', dataLess: dataLess, dataTeach: dataTeach})), setDropdown(0))}>Итальянский</a>
                                <a style={dataTeach === 'Мария Павловна Кричевская' || dataTeach === 'Ксения Александровна Лагутина' || dataTeach === null ? {} : {display: 'none'}} onClick={() => (dispatch(dataIncrement({ dataLang: 'franch', dataLess: dataLess, dataTeach: dataTeach})), setDropdown(0))}>Французкий</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className = {`button ${(dataTeach && dropdown == 2) ? 'active focus_two': dataTeach ? 'active' : dropdown == 2 ? 'focus_two': ''}`} >
                                <a onClick={()=>{setDropdown(dropdown == 2 ? 0 : 2)}}> 
                                    {dataTeach ? dataTeach: 'Выберите преподавателя'}
                                </a>
                                <img onClick={() => {dispatch(dataIncrement({ dataLang: dataLang, dataLess: dataLess, dataTeach: null})); setDropdown(0)}}src={dataTeach ? Close :arrowDown} alt="" />
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
                                <a onClick={() => (dispatch(dataIncrement({ dataLess: 'Занятия в группе', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Занятия в группе</a>
                                <a onClick={() => (dispatch(dataIncrement({ dataLess: 'Для путешествий', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Для путешествий</a>
                                <a onClick={() => (dispatch(dataIncrement({ dataLess: 'Индивидуальные занятия', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Индивидуальные занятия</a>
                                <a style={dataLang === 'eng' || dataLang === 'franch' || dataLang == null? {} : {display: 'none'}} onClick={() => (dispatch(dataIncrement({ dataLess: 'SPEAKING CLUB', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Speaking Club</a>
                                <a style={dataLang === 'italy' || dataLang == null ? {} : {display: 'none'}} onClick={() => (dispatch(dataIncrement({ dataLess: 'ПОДГОТОВКА К CILS', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Подготовка к CILS</a>
                                <a style={dataLang === 'eng' || dataLang == null ? {} : {display: 'none'}} onClick={() => (dispatch(dataIncrement({ dataLess: 'ПОДГОТОВКА К ЭКЗАМЕНАМ', dataLang: dataLang, dataTeach: dataTeach})), setDropdown(0))}>Подготовка к экзаменам</a>
                            </div>
                        </div>
                        <select name="lang" id="" style={{display: 'none'}}>
                            <option value={dataLang == 'eng' ? 'Английский':dataLang == 'italy'? 'Итальянский': dataLang == 'franch'? 'Французкий': ''}>{dataLang}</option>
                        </select>
                        <select name="teach" id="" style={{display: 'none'}}>
                            <option value={dataTeach}>{dataTeach}</option>
                        </select>
                        <select name="less" id="" style={{display: 'none'}}>
                            <option value={dataLess}>{dataLess}</option>
                        </select>
                        <input ref={inputName} type="name" name="firstname" value={letters} pattern="[A-Za-zА-Яа-я]*"  onChange={handleLetterChange} required maxLength='30' placeholder="Ваше имя"/>
                        <input ref={inputTel} type="tel" name="telephone"  value={phoneNumber} pattern="^\+?[0-9]{0,12}$" onChange={handlePhoneNumberChange} required placeholder="Номер телефона"/>
                    </div>
                    <button className='but' onClick={()=> checFill()} type="submit">Записаться <img src={strelka} alt="" /></button>
                </form>
                {/* <a className='but'onClick={()=> {handleSubmit(); dispatch(increment());   dispatch(incrementSucses())}}>Записаться</a> */}
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