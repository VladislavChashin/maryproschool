import Navbar from "./navbar"
import left_women1 from '../../source/images/header/left_women1.png'
import left_women2 from '../../source/images/header/left_women2.png'
import right_men2 from '../../source/images/header/right_men2.png'
import right_women1 from '../../source/images/header/right_women1.png'
import strelka from '../../source/images/index/strelka_big.svg'

export default function Header(){
    return(
        <header>
            <div className="header_container">
                <div className="navbar_container">
                    <Navbar/>
                </div>
                <div className="header_content">
                    <h1>Центр иностранных языков марии кричевской</h1>
                    <div className="header_heading">
                        <div className="heading_images_left">
                            <img src={left_women1} alt="" /><img src={left_women2} alt="" />
                            <p>прокачиваем знания</p>
                        </div>
                        <h2>Hi, we’re MaryPro School </h2>
                        <div className="heading_images_right">
                            <img src={right_women1} alt="" /><img src={right_men2} alt="" />
                            <p>готовим к экзаменам</p>
                        </div> 
                    </div>
                    <p>Мы влюбляем в язык <br/>с самого первого занятия</p>
                <a href="#">Записаться на пробное занятие <img src={strelka} alt="" /></a>
                </div>
            </div>
        </header>
    )
}