import './styles/learning.scss';

export default function Learning(){
    return(
        <>
        <div className="learning wow animate__animated animate__fadeIn">
            <h2>
                Как проходит обучение?
            </h2>
            <div className="block">
                <p>01</p>
                <p>Определяем ваши цели и знания</p>
                <p>Проводим предварительный тест, <br/> чтобы мы определили ваш уровень. <br/>Узнаем какие цели вы преследуете в изучении языков</p>                   
            </div>
            <div className="block">
                <p>02</p>
                <p>Выбираете удобный формат обучения</p>
                <p>Вы можете выбрать любой <br/> из предоставленных нами форматов обучения. </p>
            </div>
            <div className="block">
                <p>03</p>
                <p>Занимаетесь <br/> по персональному плану</p>
                <p>Вы устанавливаете цели,<br/> а преподаватель корректирует <br/>под них ваш учебный план. </p>
            </div>  
        </div>
        </>
    )
}