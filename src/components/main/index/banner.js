import women from '../../../source/images/main/womenWary.png'
import strelka from '../../../source/images/index/strelka_big.svg'
import './styles/banner.scss';

export default function Banner(){
    return(
        <>
            <div className="banner wow animate__animated animate__fadeIn">
                <div className="banner_content">
                    <div className="banner_text">
                        <h4>
                        Изучайте языки <br/> с легкостью!
                        </h4>
                        <p>Освойте иностранный язык с нами: <br/> инновационные методики, онлайн обучение,<br/> улучшение навыков общения. <br/> Начинайте сегодня!</p>
                    </div>
                    <div className="banner_images">
                        <img src={women} alt="" />
                        <p>Мария Павловна Кричевская — основатель центра <br/>MaryPro School </p>
                    </div>
                </div>
                <a href="">Записаться на пробное занятие <img src={strelka} alt="" /></a>
            </div>
        </>
    )
}