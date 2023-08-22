import { course } from "./data/course";
import {useState} from "react"
import strelka from '../../source/images/main/arrow-right.svg'
import classrom from '../../source/images/main/Digitalclassroom.png'

export default function ChooseCourse(){
    const [lenguage, setLenguage] = useState('eng')
    const [count, setCount] = useState(1)
    let lang = lenguage
    return(
        <>
            <div className={`chooseCourse ${lang}`} >
                <div className="chooseCourse_text">
                    <h2>Выбери курс, <br/>который тебе подходит!</h2>
                    <p>Поможем вам достичь целей в изучении <br/> выбранного иностранного языка!</p>
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
    return(
        <> 
        {courseData.categories.includes(props.lang) ? 
            <div className={`chooseCourse_course ${courseData.class}`}>
                <div className="course_textBlock">
                    <p>{courseData.tag}</p>
                    <div className="course_description">
                        <h5>{courseData.title}</h5>
                        <p>{courseData.text}</p>
                    </div>
                    <a href="#">Выбрать <img src={strelka} alt="" /> </a>
                </div>
                <div className="course_imageBlock" style={courseData.image == true ? {display: 'inline-block'} : {display: 'none'}}>
                    <img src={classrom} alt="" />
                </div>
            </div>
        : <></>}  
        </>
    )
}  