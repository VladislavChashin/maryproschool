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

// import {course} from "./data/course.js"

export default function MainPage(){
    return(
        <>
            <PopApCourse/>
            <Header/>
            <main>
                <FlexMethod/>
                <Learning/>
                <ChooseCourse/>
                <Banner/>  
                <SchoolImage/>
                <Teachers/>
                <Reviews/>
                <Banner/>
            </main>
            <Footer/>
        </>
        
    )
}