import FlexMethod from "./mainPage/flexMetod.js"
import Learning from "./mainPage/learning.js"
import Banner from "./index/banner.js"
import ChooseCourse from "./mainPage/chooseСourse.js"
import SchoolImage from "./mainPage/schoolImage.js"
import Teachers from "./mainPage/teachers.js"
import Reviews from "./index/reviews.js"
// import {course} from "./data/course.js"

export default function Main(){
    return(
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
    )
}