import { useState, useEffect, useCallback } from "react";
import oval from '../../../source/images/main/oval.png'
import drop from '../../../source/images/main/dropdown.svg'
import {price_home, price_guber} from '../data/price.js' 
import {useSelector, useDispatch } from 'react-redux'
import {incrementTeacher } from '../teachersPage/aboutTeacherReduser'
import {increment, dataIncrement} from '../../header/modalReduser'


export default function Price(){
    const [countAdd, setCountAdd] = useState(1)
    const [countLang, setCountLang] = useState(1)
    const [lenguage, setLenguage] = useState('eng')
    const [address, setAdress] = useState('home')
    const data = useSelector(state => state.teacher.teacher)
    const [addr, setAddr] = useState('г. Чехов,ул. Овражная 11')
    const dispatch = useDispatch()
    const lockScroll = useCallback(() => {
        document.body.style.overflow = "hidden"
    }, [])
    const priceMap = {
        home: price_home,
        guber: price_guber,
      };
    return(
        <>
            <div className="AllPrice">
                <div className="choose_tabs">
                    <div className=" wow animate__animated animate__fadeIn chooseCourse_tabs_adress">
                        <button className={countAdd === 1 ? 'active': ''} onClick={() => {setAdress('home'); setCountAdd(1); setAddr('г. Чехов, ул. Овражная 11')}}>г. Чехов, ул. Овражная 11</button>
                        <button className={countAdd === 2 ? 'active': ''} onClick={() => {setAdress('guber'); setCountAdd(2); setAddr('г. Чехов, ул. Земская, д.3')}}>г. Чехов, ул. Земская, д.3</button>
                    </div>
                    <div className=" wow animate__animated animate__fadeIn chooseCourse_tabs">
                        <button className={countLang === 1 ? 'active': ''} onClick={() => {setLenguage('eng'); setCountLang(1)}}>Английский</button>
                        <button className={countLang === 2 ? 'active': ''} onClick={() => {setLenguage('italy'); setCountLang(2)}}>Итальянский</button>
                        <button className={countLang === 3 ? 'active': ''} onClick={() => {setLenguage('franch'); setCountLang(3)}}>Французкий</button>
                    </div>
                </div>
                <div className="choose_price">
                    <div className="price_sub">
                        <p>Абонемент (8 занятий)</p>
                        <div className="button_sub">
                            <p>{priceMap[address][0].price} руб</p>
                            <a onClick={() => {dispatch(increment()); dispatch(dataIncrement({ dataLang: lenguage, dataTeach: 'Абонемент (8 занятий)', dataLess: addr}))}}>Записаться <img src="" alt="" /></a>
                        </div>
                    </div>
                    <div className="price_info">
                        <div className="info_roll">
                            <p>Кто будет обучать?</p>
                            <img src={drop} alt="" />
                        </div>
                        <div className="info_unroll">
                            {priceMap[address][0].teachers[lenguage].map(
                                arrayInfo =>
                                    
                                
                                    <div className="info_teach">
                                        <div className="teach_name">
                                            <img src={arrayInfo.popImage} alt="" />
                                            <p>{arrayInfo.popName}</p>
                                        </div>
                                        <a onClick={() => {dispatch(incrementTeacher(arrayInfo)); lockScroll()}}>Подробнее</a>
                                    </div>
                            ) 
                            }
                         </div>
                    </div>
                </div>
                {priceMap[address].map(array => <PriceBlock_less props={array.indiv_price[0]} key={array.id}/>)}
            </div>
        </>
    )
}

function PriceBlock_less(props){; 
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
                <p className="one">Индивидуальное</p>
                <p className="one">{props.props.quant}</p>
            </div>
            {less.map(array => <GroupBlock_blockPrice props={array} typeLess={props.props.typeLess} quant={props.props.quant} key={array.id}/>)}
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
                    <img src={props.props.img} alt="" />
                    <p>{props.props.teachName}</p>
                </div>
                <p className="one">{props.props.onePrice}</p>
                <p className="one">{props.props.twoPrice}</p>
                <div className="prices_mobile_onePrice">
                    <p>{props.typeLess}</p>
                    <p>{props.props.onePrice}</p>
                </div>
                <div className="prices_mobile_onePrice">
                    <p>{props.quant}</p>
                    <p>{props.props.twoPrice}</p>
                </div>
            </div>
            <div className="blockPrice_button">
                <a onClick={() => {dispatch(incrementTeacher(data)); lockScroll()}}>Подробнее</a>
            </div>
        </div>
    )
}