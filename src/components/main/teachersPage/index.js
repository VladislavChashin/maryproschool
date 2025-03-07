import Reviews from "../index/reviews.js"
import {HeaderTeach} from '../../header/index.js'
import Footer from '../../footer/index.js'
import Banner from "../index/banner.js"
import AllTeachers from "./teachers.js"
import AboutTeacherPopup from "../../pop-ap/aboutTeacherPopUp.js"
import {useSelector} from 'react-redux'
import PopApCourse from "../../pop-ap/PopUpCourse.js"
import SucsesPopUp from "../../pop-ap/sucsesPopUp.js"


export default function TeachersPage(){
    const count = useSelector(state => state.teacher.value)
    const count1 = useSelector(state => state.counter.value)

    return(
        <>  
            {count === true ? <AboutTeacherPopup/> : <></>}
            <SucsesPopUp/>
            <PopApCourse/>
            <HeaderTeach props='Преподаватели'/>
            <main>
                <AllTeachers/>
            </main>
                <Reviews/>
            <main>
                <Banner props = 'Изучайте языки с легкостью!' />  
            </main>
            <Footer/>
        </>
        
    )
}