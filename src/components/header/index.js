import Navbar from "./navbar"
import './styles/header.scss'
import left_women1 from '../../source/images/header/left_women1.png'
import left_women2 from '../../source/images/header/left_women2.png'
import right_men2 from '../../source/images/header/right_men2.png'
import right_women1 from '../../source/images/header/right_women1.png'
import group_people from '../../source/images/header/group.svg'
import strelka from '../../source/images/index/strelka_big.svg'
import strelkaRight from '../../source/images/header/Vector.svg'
import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './modalReduser'
import { incrementHeader } from "../main/loadReduser"


export default function Header(){
    const [width, setWidth] = useState(window.innerWidth);
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    const lockScroll = useCallback(() => {
        document.body.style.overflow = 'hidden';
      }, [])

    useEffect(() => {
        dispatch(incrementHeader({header: true}))
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    return(
        <>
        {/* {count === true ? <HeaderPopAp/>: <></>} */}
            <header className="wow animate__animated animate__fadeIn animate__slow">
                <div className="header_container">
                    <div className="navbar_container">
                        <Navbar/>
                    </div>
                    <div className="header_content">
                        <h1>Центр иностранных языков марии кричевской</h1>
                        <div className="header_heading">
                            <div className="heading_images_left" style={width <= 1024 ? {display:'none'}: {display: 'block'}}>
                                <img src={left_women1} alt="" /><img src={left_women2} alt="" />
                                <p>прокачиваем знания</p>
                            </div>
                            <h2>Hi, we’re <br/> MaryPro School </h2>
                            <div className="heading_images_right" style={width <= 1024 ? {display:'none'}: {display: 'block'}}>
                                <img src={right_women1} alt="" /><img src={right_men2} alt="" />
                                <p>готовим к экзаменам</p>
                            </div> 
                        </div>
                        <img className='people_group' src={group_people} alt="" style={width <= 1024 ? {display:'inline-block'}: {display: 'none'}}/>
                        <p>Мы влюбляем в язык <br/>с самого первого занятия</p>
                        <a onClick={() => {dispatch(increment(NaN)); lockScroll()}}>Записаться на пробное занятие <img src={strelka} alt="" /></a>
                    </div>
                </div>
            </header>
        </>
        
    )
}

export function HeaderTeach(props){
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
        <>
        {/* {count === true ? <HeaderPopAp/>: <></>} */}
            <header>
                <div className="header_container teach">
                    <div className="navbar_container">
                        <Navbar/>
                    </div>
                    <div className="header_content ">
                        <div className="nav"><Link to={'/'}>Главная</Link> <img src={strelkaRight} alt="" /> <Link>{props.props === 'Стоимость занятий'?'Цены': props.props}</Link></div>
                        <h1>{props.props}</h1>
                    </div>
                </div>
            </header>
        </>
        
    )
}