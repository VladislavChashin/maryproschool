import {useState, useEffect, useCallback} from "react"
import { teachers } from "../data/teachers";
import './styles/teachers.scss'
import {useSelector, useDispatch } from 'react-redux'
import {incrementTeacher } from './aboutTeacherReduser'

export default function AllTeachers(){
    const [count, setCount] = useState(1)
    const [lenguage, setLenguage] = useState('eng')

    return(
        <>
            <div className="AllTeachers">
                <div className="chooseCourse_tabs">
                    <button className={count === 1 ? 'active': ''} onClick={() => {setLenguage('eng'); setCount(1)}}>Английский</button>
                    <button className={count === 2 ? 'active': ''} onClick={() => {setLenguage('italy'); setCount(2)}}>Итальянский</button>
                    <button className={count === 3 ? 'active': ''} onClick={() => {setLenguage('franch'); setCount(3)}}>Французкий</button>
                </div>
                <div className="AllTeachers_teacherBlocks">
                    {teachers.map(array => <TeacherBlocks courses={array} lang={lenguage} key={array.id}/>)}
                </div>
            </div>
        </>
    )
}

function TeacherBlocks(props){
    const dispatch = useDispatch()

    const lockScroll = useCallback(() => {
        document.body.style.overflow = "hidden"
    }, [])

    let teachersData = props.courses
    return (
        <>
            {teachersData.categories.includes(props.lang) ? 

            <div className={`teacherBlocks_blockContent .item-${teachersData.id}`}>
                <div className="blockContent_image">
                    <img src={teachersData.image} alt="" />
                </div>
                <div className="blockContent_description">
                    <div className="description_content">
                        <h3>{teachersData.name}</h3>
                        <div className="descriprion_tags">
                            <p>{teachersData.tag[0]}</p>
                            <p>{teachersData.tag[1]}</p>
                            <p>{teachersData.tag[2]}</p>
                        </div>
                        <div className="description_text">
                            <p>{teachersData.text}</p>
                        </div>
                    </div>
                    <a onClick={() => {dispatch(incrementTeacher(teachersData)); lockScroll()}}>Подробнее</a>
                </div>
            </div>
            
            : <></>}
        </>
    )
}