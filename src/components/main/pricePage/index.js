import {HeaderTeach} from '../../header/index.js'
import Footer from '../../footer/index.js'
import Banner from "../index/banner.js"
import {useSelector} from 'react-redux'


export default function PricePage(){

    return(
        <>  
            <HeaderTeach props='Стоимость занятий'/>
            <main>
                <Banner props = 'Изучайте языки с легкостью!' />  
            </main>
            <Footer/>
        </>
        
    )
}