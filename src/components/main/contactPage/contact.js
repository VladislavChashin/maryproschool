import { useState } from 'react';
import './style/contact.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
export default function Contact(){
    const [cords, setCords] = useState(1)
    return(
        <div className="contact">
            <div className="contact_contaner">
                <div className="contact_text">
                    <p>Телефон:</p>
                    <a href="tel:+79775411633">+7 (977) 541-16-33</a>
                </div>
                <div className="contact_text">
                    <p>E-mail:</p>
                    <a href="mailto:marypro.school@yandex.ru">marypro.school@yandex.ru</a>
                </div>
                <div className="contact_text" >
                    <p>Филиал №1:</p>
                    <a onClick={() => setCords(1)}>г. Чехов, ул. Полиграфистов 1с2</a>
                </div>
                <div className="contact_text"  >
                    <p>Филиал №2:</p>
                    <a onClick={() => setCords(2)}>г. Чехов, ул. Земская, д.3</a>
                </div>
            </div>
            <div className="contact_map">
         <  YMaps>
                
                <Map defaultState={{ center: [55.158164, 37.467500], zoom: 13 }} style={{width: '100%', height: '100%', borderRadius: '16px'}}>
                    {cords === 1 ? 
                    <Placemark geometry={[55.158164, 37.467500]} />:
                    <Placemark geometry={[55.167493, 37.463377]} />
                    }
                </Map>
                
            </YMaps>    
            </div>
        </div>
    )
}