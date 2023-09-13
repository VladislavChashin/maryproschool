import vk from '../../source/images/footer/vk.svg'
import inst from '../../source/images/footer/inst.svg'
import './styles/footer.scss'
export default function Footer(){
    return(
        <>
            <footer>
                <div className="footer_nav">
                    <div className="nav_home">
                        <p>Главная</p>
                        <ul>
                            <li><a href="">О нас</a></li>
                            <li><a href="">Преподаватели</a></li>
                            <li><a href="">Занятия для детей</a></li>
                            <li><a href="">Занятия для взрослых</a></li>
                        </ul>
                    </div>
                    <div className="nav_contacts">
                        <p>Контакты</p>
                        <ul>
                            <li><a href="">Цены</a></li>
                            <li><a href="">Отзывы</a></li>
                            <li><a href="">Блог</a></li>
                        </ul>
                    </div>
                    <div className="nav_contact_text">
                        <ul>
                            <li><a href="">+7 (977) 541-16-33</a></li>
                            <li><a href="">marypro.school@yandex.ru</a></li>
                            <li><a href="">г. Чехов, ул. Полиграфистов 1с2</a></li>
                            <li> <img src={vk} alt="" /><img src={inst} alt="" /> </li>
                        </ul>
                    </div>
                </div>
                <p>MARYPRO SCHOOL</p>
            </footer>
        </>
    )
}