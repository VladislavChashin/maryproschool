import strelkaRight from '../../../source/images/index/arrowRight.svg'
import strelkaLeft from '../../../source/images/index/arrowLeft.svg'
import women from '../../../source/images/main/otzivWomen.png'
import './styles/reviews.scss';
import { useState, useEffect } from "react";

export default function Reviews(){
    const [width, setWidth] = useState(window.innerWidth);
    const [rotate, setRotate] = useState(0)

    useEffect(() => {
      const handleResize = (event) => {
        setWidth(event.target.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    const updateIndex = (counter) => {
        if (counter >= 3 ){
            setRotate(0)
        }else{
            setRotate(counter)
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
                <div className="reviews_content" style={width <= 810 ?{transform: `translateX(-${rotate * width}px)`}: {transform: `translateX(-${rotate * 790}px)`}}>
                    <ReviewBlocks/>
                    <ReviewBlocks/>
                    <ReviewBlocks/>
                </div>
            </div>
        </>
    )
}

function ReviewBlocks(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = (event) => {
        setWidth(event.target.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return(
        <>
            <div className="reviews_reviewBlock" style={width <= 810 ? {minWidth: width-80}: {width: '710px'}}>
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