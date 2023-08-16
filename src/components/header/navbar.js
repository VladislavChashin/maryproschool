import logo from '../../source/images/header/logo.svg'

export default function Navbar(){
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
                <p>+7 (977) 541-16-33 </p>
            </div>
        </div>
        
    )
}