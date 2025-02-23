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
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
    return(
        <>
            <footer>
                <div className="footer_nav wow animate__animated animate__fadeIn">
                    <div className="nav_home">
                        <p>Главная</p>
                        <ul>
                            <li onClick={scrollToTop}><NavLink to="/">О нас</NavLink></li>
                            <li onClick={scrollToTop}><NavLink to="/teacher/">Преподаватели</NavLink></li>
                            <li onClick={scrollToTop}><NavLink to="/price/">Занятия для детей</NavLink></li>
                            <li onClick={scrollToTop}><NavLink to="/price/">Занятия для взрослых</NavLink></li>
                        </ul>
                    </div>
                    <div className="nav_contacts">
                        <p>Контакты</p>
                        <ul>
                            <li onClick={scrollToTop}><NavLink to="/price/">Цены</NavLink></li>
                           
                        </ul>
                    </div>
                    <div className="nav_contact_text">
                        <ul>
                            <li><a href="tel:+79775411633">+7 (977) 541-16-33</a></li>
                            <li><a href="mailto:marypro.school@yandex.ru">marypro.school@yandex.ru</a></li>
                            <li><NavLink to="/contacts/">г. Чехов, ул. Овражная 11</NavLink></li>
                            <li><NavLink to="/contacts/">г. Чехов, мкр. Губернский, ул. Земская, д.3</NavLink></li>
                            <li> <a href="https://vk.com/maryproschool"><img src={vk} alt="" /></a> <a href="https://instagram.com/marypro_school?igshid=MzRlODBiNWFlZA=="><img src={inst} alt="" /></a> </li>
                        </ul>
                    </div>
                </div>
                <p>MARYPRO SCHOOL</p>
            </footer>
        </>
    )
}