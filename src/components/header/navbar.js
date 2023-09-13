import logo from '../../source/images/header/logo.svg'
import call from '../../source/images/header/call.svg'
import { useState, useEffect } from 'react';

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
                    <li>О нас</li>
                    <li>Преподаватели</li>
                    <li>Занятия для детей</li>
                    <li>Занятия для взрослых</li>
                    <li>Цены</li>
                    <li>Отзывы</li>
                    <li>Блог</li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div className="phone backgroundFon">
                {width >= 1600 ? <p>+7 (977) 541-16-33 </p>: <img src={call} alt="" />}
            </div>
            <div className="mobile_nav backgroundFon">

            </div>
        </div>
        
    )
}