import { course } from "../data/course";
import {useState, useEffect, useCallback} from "react"
import strelka from '../../../source/images/main/arrow-right.svg'
import classrom from '../../../source/images/main/Digitalclassroom.png'
import indivFranch from '../../../source/images/main/indivFranch.png'
import speackFranch from '../../../source/images/main/speckFranch.png'
import group from '../../../source/images/main/twoClassroom.png'
import './styles/chooseCourse.scss';
import {useDispatch } from 'react-redux'
import {increment, dataIncrement } from '../../header/modalReduser'


export default function ChooseCourse(){
    const [lenguage, setLenguage] = useState('eng')
    const [count, setCount] = useState(1)

    let lang = lenguage
    return(
        <>
            <div className={`wow animate__animated animate__fadeIn chooseCourse ${lang} `} >
                <div className="chooseCourse_text">
                    <h2>Выбери курс, <br/>который тебе подходит!</h2>
                    <p>Поможем влюбиться в иностранный язык <br />и начать разговаривать уже через 10 месяцев</p>
                </div>
                <div className="chooseCourse_tabs">
                    <button className={count === 1 ? 'active': ''} onClick={() => {setLenguage('eng'); setCount(1)}}>Английский</button>
                    <button className={count === 2 ? 'active': ''} onClick={() => {setLenguage('italy'); setCount(2)}}>Итальянский</button>
                    <button className={count === 3 ? 'active': ''} onClick={() => {setLenguage('franch'); setCount(3)}}>Французкий</button>
                </div>
                <div className="chooseCourse_courses">
                    {course.map(array => <Course courses={array} lang={lenguage} key={array.id}/>)}
                </div>
            </div>
        </>
    )
}

function Course(props){
    let courseData = props.courses
    // const dataPopUp = [props.lang, courseData.title]
    const [width, setWidth] = useState(window.innerWidth);
    const dispatch = useDispatch()

    const lockScroll = useCallback(() => {
        document.body.style.overflow = "hidden"
    }, [])

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
        {courseData.categories.includes(props.lang) ? 
            <div className={`wow animate__animated animate__fadeIn chooseCourse_course ${courseData.class}` }>
                <div className="course_textBlock">
                    <p>{courseData.tag}</p>
                    <div className="course_imageBlock" 
                        style={courseData.image == true || 
                        (props.lang == 'franch' && (courseData.class == 'indiv' || courseData.class == 'speak') && width > 1216)
                        ? width < 768 ? {display: 'flex'} : {display: 'none'} 
                        : {display: 'none'}}>

                            <img src={courseData.class == 'indiv' ? indivFranch : courseData.class == 'speak' ? speackFranch : courseData.class == 'group' ? group : classrom} alt="" />
                    </div>
                    <div className="course_description">
                        <h5>{courseData.title}</h5>
                        <p>{courseData.text}</p>
                    </div>
                    <a onClick={() => {dispatch(increment()); dispatch(dataIncrement({ dataLang: props.lang, dataLess: courseData.title })); lockScroll()}}>Выбрать <img src={strelka} alt="" /> </a>
                </div>
                <div className="course_imageBlock" 
                style={courseData.image == true || 
                (props.lang == 'franch' && (courseData.class == 'indiv' || courseData.class == 'speak') && width > 1216)
                ? width > 768 && courseData.class != 'group' ? {display: 'flex'} : {display: 'none'} 
                : {display: 'none'}}>

                    <img src={courseData.class == 'indiv' ? indivFranch : courseData.class == 'speak' ? speackFranch : (courseData.class == 'group' && width < 768) ? group : courseData.class == 'cils' ? classrom : courseData.class == 'ege' ? classrom: ''} alt="" />
                </div>
            </div>
        : <></>}  
        </>
    )
}  