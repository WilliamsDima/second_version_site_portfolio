import React from 'react';
import './neptune.scss';


const Neptune = (props) => {


    return (
        <div className='neptune-orbit'>

            <div className='planet-wrap'>

            <div className="neptune" id="neptune">

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
                <p>Нептун:</p>
                <p>Возраст: 4,5 млрд лет</p>
                <p>Кислород: нету</p>
                <p>1 год (Сидерический период): 164.79 земных лет</p>
                <p>Продолжительность суток: 18 часов</p>
                <p>на Нептуне самые сильные в Солнечной системе ветры – их скорость достигает 2100 км/ч, то есть ветер там почти вдвое быстрее скорости звука в обычном воздухе!</p>
            </div>

            </div>

        </div>
    )
}

export default Neptune;