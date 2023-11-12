import logo from '../../source/images/header/logo.svg'
import call from '../../source/images/header/call.svg'
import menu from '../../source/images/header/Menu.svg'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLink as Link } from "react-router-dom";

export default function Navbar(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = (event) => {
        setWidth(event.target.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
        <div className="navbar_content">
            <div className="logo backgroundFon">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/maryproschool">О нас</NavLink></li>
                    <li><NavLink to="/teacher">Преподаватели</NavLink></li>
                    <li><NavLink to="/price">Цены</NavLink></li>
                    <li><NavLink to="/revews">Отзывы</NavLink></li>
                    <li><NavLink to="/contacts">Контакты</NavLink></li>
                </ul>
            </nav>
            <div className="phone backgroundFon">
                {width >= 1600 ? <p>+7 (977) 541-16-33 </p>: <img src={call} alt="" />}
            </div>
            <div className="mobile_nav backgroundFon">
                <img src={menu} alt="" />
            </div>
        </div>
        
    )
}