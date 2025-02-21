import logo from '../../source/images/header/logo.svg'
import call from '../../source/images/header/call.svg'
import menu from '../../source/images/header/Menu.svg'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLink as Link } from "react-router-dom";
import HamburgerMenu from './hamburgerMenu';

export default function Navbar(){
    const [width, setWidth] = useState(window.innerWidth);
    const [active, setActive] = useState(1)
    const [scroll, setScroll] = useState(0);
    const [fixed, setFixed] = useState(true);
    // const [scrollHeight, setScrollHeight] = useState(0)

    // const handleScroll = () => {
    //     const element = document.getElementById('root');
    //     const rect = element.getBoundingClientRect();
    //     const difference = rect.top;
    //     setScrollHeight(difference)
    //   };
      
    //   window.addEventListener('scroll', handleScroll);
      

    useEffect(() => {
      const handleResize = (event) => {
        setWidth(event.target.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        console.log(currentScroll);
        console.log(fixed);
        console.log(scroll);
        if (currentScroll === 0 || currentScroll < scroll) {
          setFixed(true);
        } else {
          setFixed(false);
        }
        setScroll(currentScroll);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scroll]);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return(
        <div className={`navbar_content ${fixed === true ? 'fixed' : ''}`} style = {width >= 1600 ? {width: "1465px"} :  width <= 425 ? {width:`${width-70}px`} :  width <= 768 ? {width:`${width-93}px`} : width <= 1024 ? {width:`${width-80}px`} : {width:`${width-120}px`}}>
            <div className="logo backgroundFon">
                <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                
            </div>
            <nav>
                <ul>
                    <li className={window.location.pathname == '/' ? 'active' : ''} onClick={()=> {setActive(1); scrollToTop()}}><NavLink to="/">О нас</NavLink></li>
                    <li className={window.location.pathname == '/teacher/' ? 'active' : ''} onClick={()=> {setActive(2); scrollToTop()}}><NavLink to="/teacher/">Преподаватели</NavLink></li>
                    <li className={window.location.pathname == '/price/' ? 'active' : ''} onClick={()=> {setActive(3); scrollToTop()}}><NavLink to="/price/">Цены</NavLink></li>
                    <li className={window.location.pathname == '/contacts/' ? 'active' : ''} onClick={()=> {setActive(5); scrollToTop()}}><NavLink to="/contacts/">Контакты</NavLink></li>
                </ul>
            </nav>
            <div className="phone backgroundFon">
                {width >= 1600 ? <a href="tel:+79775411633">+7 (977) 541-16-33</a>: <img src={call} alt="" />}
            </div>
            <div className="mobile_nav backgroundFon">
                <HamburgerMenu/>
            </div>
        </div>
        
    )
}