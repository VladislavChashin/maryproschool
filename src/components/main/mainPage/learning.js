import './styles/learning.scss';

export default function Learning(){
    return(
        <>
        <div className="wow animate__animated animate__fadeIn learning ">
            <h2>
                Как начать занятия?
            </h2>
            <div className="block">
                <p>01</p>
                <p>Определяем ваши цели и знания</p>
                <p>Мы проводим тестирование. Оно необходимо <br /> для определения стратегий занятий в соответсвии <br /> с вашими целями</p>                   
            </div>
            <div className="block">
                <p>02</p>
                <p>Выбираете удобный формат обучения</p>
                <p>У нас можно заниматься онлайн и офлайн в групповом, парном и индивидуальных форматах</p>
            </div>
            <div className="block">
                <p>03</p>
                <p>Занимаетесь <br/> по персональному плану</p>
                <p>Выбираете удобную дату и время занятий <br />и достигаете своих целей </p>
            </div>  
        </div>
        </>
    )
}