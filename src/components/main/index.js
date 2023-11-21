import FlexMethod from "./mainPage/flexMetod.js"
import Learning from "./mainPage/learning.js"
import Banner from "./index/banner.js"
import ChooseCourse from "./mainPage/chooseСourse.js"
import SchoolImage from "./mainPage/schoolImage.js"
import Teachers from "./mainPage/teachers.js"
import Reviews from "./index/reviews.js"
import Header from '../header/index.js'
import Footer from '../footer/index.js'
import PopApCourse from "../pop-ap/PopUpCourse"
import SucsesPopUp from "../pop-ap/sucsesPopUp.js"

// import {course} from "./data/course.js"

export default function MainPage(){
    // const countSucses = useSelector(state => state.counter.valueSucses)
    // const count = useSelector(state => state.counter.value)
    return(
        <>
            <PopApCourse/>
            <SucsesPopUp/>
            <Header/>
            <main>
                <FlexMethod/>
                <Learning/>
                <ChooseCourse/>
                <Banner props = 'Изучайте языки с легкостью!' />  
                <SchoolImage/>
                <Teachers/>
            </main>
            <Reviews/>
            <main>
                <Banner props = 'Запишитесь на пробное занятие'/>
            </main>
            <Footer/>
        </>
        
    )
}