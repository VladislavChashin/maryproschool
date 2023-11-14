import React, { useCallback, useState } from "react";
import './styles/hamburger.scss'
import menu from '../../source/images/header/Menu.svg'
import menuX from '../../source/images/header/MenuX.svg'

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const lockScroll = useCallback((l) => {
    if (l === true){
        document.body.style.overflow = ""
    }else{
        document.body.style.overflow = "hidden"
    }
        
    }, [])
  return (
    <>
        <div className={`hamburger_menu ${click === true ? 'open' : ''}`} onClick={()=>{setClick(prev => !prev); lockScroll(click)}}>
            {click === true ? <img src={menuX} alt="" /> : <img src={menu} alt="" />}
        </div>
        <div className={`menu_content ${click === true ? 'open' : ''}`}>
            <ul>
                <li onClick={() => {setClick(prev => !prev); lockScroll(click)}}>О нас</li>
                <li onClick={() => {setClick(prev => !prev); lockScroll(click)}}>Преподаватели</li>
                <li onClick={() => {setClick(prev => !prev); lockScroll(click)}}>Цены</li>
                <li onClick={() => {setClick(prev => !prev); lockScroll(click)}}>Отзывы</li>
                <li onClick={() => {setClick(prev => !prev); lockScroll(click)}}>Контакты</li>
            </ul>
        </div>
    </>
  );
}

export default HamburgerMenu;