import vk from '../../source/images/footer/vk.svg'
import inst from '../../source/images/footer/inst.svg'
import './styles/footer.scss'
import { incrementFooter } from "../main/loadReduser"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { NavLink as Link } from "react-router-dom";


export default function Footer(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(incrementFooter({footer: true}))
        return
    }, []); 
    return(
        <>
            <footer>
                <div className="footer_nav wow animate__animated animate__fadeIn">
                    <div className="nav_home">
                        <p>Главная</p>
                        <ul>
                            <li><NavLink to="/maryproschool/">О нас</NavLink></li>
                            <li><NavLink to="/teacher/">Преподаватели</NavLink></li>
                            <li><NavLink to="/price/">Занятия для детей</NavLink></li>
                            <li><NavLink to="/price/">Занятия для взрослых</NavLink></li>
                        </ul>
                    </div>
                    <div className="nav_contacts">
                        <p>Контакты</p>
                        <ul>
                            <li><NavLink to="/price/">Цены</NavLink></li>
                           
                        </ul>
                    </div>
                    <div className="nav_contact_text">
                        <ul>
                            <li><a href="tel:+79775411633">+7 (977) 541-16-33</a></li>
                            <li><a href="mailto:marypro.school@yandex.ru">marypro.school@yandex.ru</a></li>
                            <li><NavLink to="/contacts/">г. Чехов, ул. Полиграфистов 1с2</NavLink></li>
                            <li><NavLink to="/contacts/">г. Чехов, мкр. Губернский, ул. Земская, д.3</NavLink></li>
                            <li> <img src={vk} alt="" /><img src={inst} alt="" /> </li>
                        </ul>
                    </div>
                </div>
                <p>MARYPRO SCHOOL</p>
            </footer>
        </>
    )
}