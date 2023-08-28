import strelkaRight from '../../source/images/index/arrowRight.svg'
import strelkaLeft from '../../source/images/index/arrowLeft.svg'
import women from '../../source/images/main/otzivWomen.png'
import { useState } from "react";

export default function Reviews(){
    const [rotate, setRotate] = useState(0)
    const updateIndex = (counter) => {
        if (rotate >= 0){
            setRotate(-1)
        }else{
            setRotate(-1)
        }
    }
    const remuveIndex = (counter) => {
        if (rotate <= 1){
            setRotate(0)
        }else{
            setRotate(counter)
        }
    }
    return(
        <>
            <div className="reviews">
                <div className="reviews_header">
                    <h2>Отзывы</h2>
                    <div className="reviews_navigate">
                        <img onClick={()=> remuveIndex(rotate - 1)} src={strelkaLeft} alt="" /><img onClick={()=> updateIndex(rotate + 1)} src={strelkaRight} alt="" />
                    </div>
                </div>
                <div className="reviews_content">
                    <ReviewBlocks/>
                    <ReviewBlocks/>
                </div>
            </div>
        </>
    )
}

function ReviewBlocks(){
    return(
        <>
            <div className="reviews_reviewBlock">
                <div className="reviewBlock_info">
                    <img src={women} alt="" />
                    <div className="info_name">
                        <p>Елена Пономарева</p>
                        <p>г. Чехов</p>
                    </div>
                </div>
                <div className="reviewBlock_description">
                    <h5>Поступила в Академию внешней торговли <br/> с высоким баллом</h5>
                    <p>Павел Зиновьевич отлично подает грамматическую систему языка, <br />
                        лексическое наполнение для каждого уровня, а также готовит к международным экзаменам в соответствии с их структурой. Повезло заниматься с ним еще в обычной школе <br />
                        и индивидуально, а также на групповых занятиях для подготовки к экзамену FCE, <br />
                        который сдала с первого раза. <br />
                        Через год поступила в Академию внешней торговли с высоким баллом по английскому <br />
                        без подготовки</p>
                </div>
            </div>
        </>
    )
}