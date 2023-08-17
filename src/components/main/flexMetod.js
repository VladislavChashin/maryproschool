export default function FlexMethod(){
    return(
        <>
            <div className="flex_metodolog">
                <div className="flex_metodolog_one">
                    <h3>
                        Наша гибкая методика позволяет 
                        ученикам быстро достигать целей 
                        в изучении языков
                    </h3>
                    <p>
                        С самого первого занятия мы максимально 
                        погружаем учеников в языковую среду: 
                        начинаем сразу же говорить, слушать,
                        писать — и все это вне зависимости от возраста 
                    </p>
                    <a href="">Записаться на пробное занятие</a>
                </div>
                <div className="flex_metodolog_column">
                    <div className="one_ block">
                        <p>700₽</p>
                        <p>Минимальная стоимость занятия</p>
                    </div>
                    <div className="two_ block">
                        <p>{'>'}1000</p>
                        <p>Учеников прошло через нашу школу</p>
                    </div>
                    <div className="three_ block">
                        <p>4</p>
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