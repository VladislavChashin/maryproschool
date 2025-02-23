import React, { useCallback, useState } from "react";
import './styles/hamburger.scss'
import menu from '../../source/images/header/Menu.svg'
import menuX from '../../source/images/header/MenuX.svg'
import { NavLink } from 'react-router-dom';

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const lockScroll = useCallback((l) => {
    if (l === true){
        document.body.style.overflow = ""
    }else{
        document.body.style.overflow = "hidden"
    }
        
    }, [])
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  return (
    <>
        <div className={`hamburger_menu ${click === true ? 'open' : ''}`} onClick={()=>{setClick(prev => !prev); lockScroll(click)}}>
            {click === true ? <img src={menuX} alt="" /> : <img src={menu} alt="" />}
        </div>
        <div className={`menu_content ${click === true ? 'open slide-in-top' : ''}`}>
            <ul>
                <li onClick={() => {setClick(prev => !prev); lockScroll(click); scrollToTop()}}><NavLink to="/">О нас</NavLink></li>
                <li onClick={() => {setClick(prev => !prev); lockScroll(click); scrollToTop()}}><NavLink to="/teacher/">Преподаватели</NavLink></li>
                <li onClick={() => {setClick(prev => !prev); lockScroll(click); scrollToTop()}}><NavLink to="/price/">Цены</NavLink></li>
                <li onClick={() => {setClick(prev => !prev); lockScroll(click); scrollToTop()}}><NavLink to="/contacts/">Контакты</NavLink></li>
            </ul>
        </div>
    </>
  );
}

export default HamburgerMenu;