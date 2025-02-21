import {HeaderTeach} from '../../header/index.js'
import Footer from '../../footer/index.js'
import Banner from "../index/banner.js"
import {useSelector} from 'react-redux'
import Contact from './contact.js'


export default function ContactPage(){

    return(
        <>  
            <HeaderTeach props='Контакты'/>
            <main>
                <Contact/>
                <Banner props = 'Изучайте языки с легкостью!' />  
            </main>
            <Footer/>
        </>
        
    )
}