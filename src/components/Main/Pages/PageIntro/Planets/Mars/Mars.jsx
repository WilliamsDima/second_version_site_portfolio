import React from 'react';
import './mars.scss';


const Mars = (props) => {


    return (
        <div className='mars-orbit'>

            <div className='planet-wrap'>

            <div className="mars" id="mars">

                    <div className="dark">
                        <div className="planet"> 
                            <div className="wrap">
                                <div className="background"></div>
                                <div className="clouds"></div>   
                            </div>

                            <div className="mask"></div>
                        </div>
                    </div>

            </div> 

            <div className='planet-text'>
                <p>Марс:</p>
                <p>Возраст: 4,65 млрд лет</p>
                <p>Кислород: 0,145%</p>
                <p>1 год (Сидерический период): 686.98 суток</p>
                <p>Продолжительность суток: марсианские сутки называются солом. 1 сол = 1 земные сутки 37 минут</p>
                <p>Особенность: видны высохшие русла рек, имеется лед, а значит есть и вода</p>
            </div>

            </div>

        </div>
    )
}

export default Mars;