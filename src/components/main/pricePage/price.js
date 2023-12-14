import { useState, useEffect, useCallback } from "react";
import oval from '../../../source/images/main/oval.png'
import price from '../data/price.js' 
import {useSelector, useDispatch } from 'react-redux'
import {incrementTeacher } from '../teachersPage/aboutTeacherReduser'


export default function Price(){
    const [count, setCount] = useState(1)
    const [lenguage, setLenguage] = useState('eng')
    return(
        <>
            <div className="AllPrice">
                <div className=" wow animate__animated animate__fadeIn chooseCourse_tabs">
                    <button className={count === 1 ? 'active': ''} onClick={() => {setLenguage('eng'); setCount(1)}}>Английский</button>
                    <button className={count === 2 ? 'active': ''} onClick={() => {setLenguage('italy'); setCount(2)}}>Итальянский</button>
                    <button className={count === 3 ? 'active': ''} onClick={() => {setLenguage('franch'); setCount(3)}}>Французкий</button>
                </div>
                {price.map(array => <PriceBlock_less props={array} key={array.id}/>)}
                {/* <div className="priceBlock_less">
                    <h2>Занятие для детей</h2>
                    <div className="less_group">
                        <div className="groupBlock">
                            <div className="groupBlock_choice">
                                <p>Груповые занятия</p>
                                <p>Одно занятие</p>
                                <p>Абонемент</p>
                            </div>
                            <div className="groupBlock_blockPrice">
                                <div className="blockPrice_prices">
                                    <div className="prices_name">
                                        <img src={oval} alt="" />
                                        <p>Мария Кричевская</p>
                                    </div>
                                    <p>1000 руб.</p>
                                    <p>7200 руб.</p>
                                </div>
                                <div className="blockPrice_button">
                                    <a href="">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

function PriceBlock_less(props){
    const types = props.props.type
    return(
        <div className="priceBlock_less">
            <h2>{props.props.nameLess}</h2>
            <div className="less_group">
                {types.map(array => <GroupBlock props={array} key={array.id}/>)}
            </div>
        </div>
    )
}

function GroupBlock(props){
    const less = props.props.less
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
        <div className="groupBlock">
            <div className="groupBlock_choice">
                <p>{props.props.typeLess}</p>
                {width > 425?
                <>
                    <p>Одно занятие</p>
                    <p>{props.props.quant}</p>
                </>
                : <></>}
            </div>
            {less.map(array => <GroupBlock_blockPrice props={array} typeLess={width<=425? props.props.typeLess: ''} quant={width<=425? props.props.quant: ''} key={array.id}/>)}
        </div>
    )
}

function GroupBlock_blockPrice(props){
    const dispatch = useDispatch()
    const [width, setWidth] = useState(window.innerWidth);
    const data = props.props.data
    useEffect(() => {
        const handleResize = (event) => {
          setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const lockScroll = useCallback(() => {
        document.body.style.overflow = "hidden"
    }, [])
    return(
        <div className="groupBlock_blockPrice">
            <div className="blockPrice_prices">
                <div className="prices_name">
                    <img src={oval} alt="" />
                    <p>{props.props.teachName}</p>
                </div>
                {width>425? 
                <>
                    <p>{props.props.onePrice}</p>
                    <p>{props.props.twoPrice}</p>
                </>
                :
                <>
                    <div className="prices_mobile_onePrice">
                        <p>{props.typeLess}</p>
                        <p>{props.props.onePrice}</p>
                    </div>
                    <div className="prices_mobile_onePrice">
                        <p>{props.quant}</p>
                        <p>{props.props.twoPrice}</p>
                    </div>
                </>
                
                }
            </div>
            <div className="blockPrice_button">
                <a onClick={() => {dispatch(incrementTeacher(data)); lockScroll()}}>Подробнее</a>
            </div>
        </div>
    )
}