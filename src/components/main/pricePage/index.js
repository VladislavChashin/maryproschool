import {HeaderTeach} from '../../header/index.js'
import Footer from '../../footer/index.js'
import Banner from "../index/banner.js"
import {useSelector} from 'react-redux'
import Price from './price.js'
import './style/price.scss'
import AboutTeacherPopup from "../../pop-ap/aboutTeacherPopUp.js"
import PopApCourse from "../../pop-ap/PopUpCourse.js"
import SucsesPopUp from "../../pop-ap/sucsesPopUp.js"


export default function PricePage(){
    const count = useSelector(state => state.teacher.value)
    return(
        <>  
            {count === true ? <AboutTeacherPopup/> : <></>}
            <SucsesPopUp/>
            <PopApCourse/>
            <HeaderTeach props='Стоимость занятий'/>
            <main>
                <Price/>
                <Banner props = 'Изучайте языки с легкостью!' />  
            </main>
            <Footer/>
        </>
        
    )
}