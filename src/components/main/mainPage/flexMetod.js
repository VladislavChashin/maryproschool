import './styles/flexMetod.scss';

export default function FlexMethod(){
    return(
        <>
            <div className="flex_metodolog wow animate__animated animate__fadeIn">
                <div className="flex_metodolog_one">
                    <h3>
                    Занятия только <br /> на иностранном языке. <br /> Начиная с самого первого.  <br /> Вне зависимости от возраста
                    </h3>
                    <p>
                    В основе работы каждого преподавателя нашего цента лежит коммуникативный подход. В MaryPro School каждый студент учится понимать, чувствовать язык и сразу же применять его на практике. С самого первого занятия мы максимально погружаем учеников в языковую среду: начинаем сразу же говорить, слушать, писать — и все это вне зависимости от возраста
                    </p>
                    <div className="button">
                        <a href="">Записаться на пробное занятие</a>
                    </div>
                </div>
                <div className="flex_metodolog_one Mobile">
                    <h3>
                    Наша гибкая методика позволяет ученикам <br />быстро достигать целей <br />в изучении языков
                    </h3>
                    <p>
                    С самого первого занятия <br />мы максимально погружаем учеников <br />в языковую среду: начинаем сразу <br />же говорить, слушать, писать — <br />и все это вне зависимости от возраста 
                    </p>
                    <div className="button">
                        <a href="">Записаться на пробное занятие</a>
                    </div>
                </div>
                <div className="flex_metodolog_column">
                    <div className="one_ block">
                        <p>600₽</p>
                        <p>Минимальная стоимость занятия</p>
                    </div>
                    <div className="two_ block">
                        <p>{'>'}1000</p>
                        <p>Учеников прошло через нашу школу</p>
                    </div>
                    <div className="three_ block">
                        <p>6</p>
                        <p>Сильных преподавателя</p>
                    </div>
                    <div className="four_ block">
                        <p>6</p>
                        <p>Максимальный размер группы</p>
                    </div>
                </div>
            </div>
        </>
    )
}