import React from 'react';
import './venus.scss';


const Venus = (props) => {


    return (
        <div className='venus-orbit'>

            <div className='planet-wrap'>

            <div className="venus" id="venus">

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
                <p>Венера:</p>
                <p>Возраст: 4,6 млрд лет</p>
                <p>Кислород: нету</p>
                <p>1 год (Сидерический период): 224.7 земных суток</p>
                <p>Продолжительность суток: 116.8 земных суток</p>
                <p>Особенность: День на Венере – тоже уникальное явление. Землянам к нему было бы непросто приспособиться</p>
            </div>

            </div>

        </div>
    )
}

export default Venus;