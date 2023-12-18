import Close from '../../source/images/header/Close.svg'
import './styles/aboutTeacherPopUp.scss'
import {useCallback } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {incrementTeacher } from '../main/teachersPage/aboutTeacherReduser'
import {increment, dataIncrement} from '../header/modalReduser'

export default function AboutTeacherPopup(){
    const count = useSelector(state => state.teacher.value)
    const data = useSelector(state => state.teacher.teacher)
    const dataLang = useSelector(state => state.counter.dataLang)
    const dataLess = useSelector(state => state.counter.dataLess)
    const dataTeach = useSelector(state => state.counter.dataTeach)
    const dispatch = useDispatch()

    const unlockScroll = useCallback(() => {
        document.body.style.overflow = ""
    }, [])
    const dataTags = data.about.levelLang
    const dataAbout = data.about
    return(
        <>
            <div className=" modalWraper_teacher">
                <div className="TeacherPopAp slide-in-right">
                    <div className=" TeacherPopAp_header">
                        <p>О преподавателе</p>
                        <img src={Close} alt="" onClick={()=> {dispatch(incrementTeacher()); unlockScroll()}}/>
                    </div>
                    <div className="TeacherPopAp_content">
                        <div className="TeacherPopAp_about">
                            <div className="images">
                                <img src={data.popImage} alt="" />
                            </div>
                            
                            <div className="description">
                                <h4>{data.popName}</h4>
                                <div className="tags">
                                    {dataTags.map(array => <TagsBlock data={array} key={array.level}/>)}
                                </div>
                            </div>
                                
                        </div>
                        <div className="scroll_block">
                            
                            <div className="block_info">
                                <h5>Образование</h5>
                                <p>{dataAbout.education}</p>
                            </div>
                            <div className="block_info internships">
                                <h5>Стажировки</h5>
                                {dataAbout.internships.map(array => <p>{array}</p> )}
                            </div>
                            <div className="block_info sertificate">
                                <h5>Сертификаты</h5>
                                {dataAbout.sertificate.map(array => <p>{array}</p> )}
                            </div>
                        </div>
                        
                    </div>
                    <div className="TeacherPopUp_footer">
                        <a onClick={() => {dispatch(increment()); dispatch(dataIncrement({ dataLang: null, dataLess: null, dataTeach: data.name}))}}>Записаться на пробное занятие</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

function TagsBlock(props){
    let tagsData = props.data
    return (
        <div className="tags_block">
            <p>{tagsData.level}</p>
            <p>{tagsData.description}</p>
        </div>
    )
}