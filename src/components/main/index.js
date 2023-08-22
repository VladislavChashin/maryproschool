import FlexMethod from "./flexMetod.js"
import Learning from "./learning.js"
import Banner from "./banner.js"
import ChooseCourse from "./chooseСourse.js"
// import {course} from "./data/course.js"

export default function Main(){
    return(
        <main>
            <FlexMethod/>
            <Learning/>
            <ChooseCourse/>
            <Banner/>  
        </main>
    )
}