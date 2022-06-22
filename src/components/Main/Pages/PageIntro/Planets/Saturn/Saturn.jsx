import React from 'react';
import './saturn.scss';


const Saturn = (props) => {


    return (
        <div className='saturn-orbit'>

            <div className='planet-wrap'>

            <div className="saturn" id="saturn">
                <div className="planet">
                    <div className="planet bottom planet-bg"></div>
                    <div className="rings"></div>
                    <div className="planet top planet-bg"></div>
                    <div className="shadow"></div>
                </div>
            </div>

            <div className='planet-text'>
                <p>Сатурн:</p>
                <p>Возраст: 4,6 млрд лет</p>
                <p>Кислород: слишком мало</p>
                <p>1 год (Сидерический период): 29.45 земных лет</p>
                <p>Продолжительность суток: 10 часов 33 минут</p>
                <p>Особенность: властелин колец, и тоже газовый гигант. Поэтому с Юпитером у него немало общего. Сатурн тоже вращается с дикой скоростью</p>
            </div>

            </div>

        </div>
    )
}

export default Saturn;