import './load.scss'
import { useSelector, useDispatch } from 'react-redux'

export default function Load(){
    const header = useSelector(state => state.load.header)
    const choseCurse = useSelector(state => state.load.choseCurse)
    const school = useSelector(state => state.load.school)
    const footer = useSelector(state => state.load.footer)
    console.log(`Хеадер ${header}`)
    console.log(`курс ${choseCurse}`)
    console.log(`скол ${school}`)
    console.log(`футер ${footer}`)
    return(
        <div className="load">
            <div className="load_timer">
                <p>1</p>
                <p>2</p>
            </div>
        </div>
    )
}