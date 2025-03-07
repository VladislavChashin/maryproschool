import { teachers } from "../data/course";
import strelka from '../../../source/images/index/arrowRightblue.svg'
import './styles/teacers.scss';
import { NavLink } from 'react-router-dom';
import { NavLink as Link } from "react-router-dom";

export default function Teachers(){
    return(
        <>
            <div className="teachers wow animate__animated animate__fadeIn">
                <h2>Преподаватели</h2>
                <div className="teachers_allTeachers">
                    <div className="teachers_headTeacher">
                        <ImageBlock props = {teachers.one} key = {1}/>
                        <div className="headTeacher_description">
                            <p>В составе нашей команды <br />
                                6 сильнейших преподавателя, <br />
                                которые доведут <br />
                                вас до результатов</p>
                            <NavLink to="/teacher/">О преподавателях<img src={strelka} alt="" /></NavLink>
                        </div>
                    </div>
                    <div className="teachers_otherTeacher ">
                        <ImageBlock props = {teachers.two} key = {2}/>
                        <ImageBlock props = {teachers.three} key = {3} />
                    </div>
                </div>
            </div>
        </>
    )
}

function ImageBlock(props){
    const data = props.props
    return(
        <>
            <div className="imageBlock">
                <img className = "wow animate__animated  animate__fadeIn" src={data.src} alt="" />
                <p>{data.name}</p>
                <p>{data.description}</p>
            </div>
        </>
    )
}