import React from 'react';
import './earth.scss';


const Earth = (props) => {


    return (
        <div className='earth-orbit'>

            <div className='planet-wrap'>

                <div className="earth" id="earth">

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
                    <p>Земля:</p>
                    <p>Возраст: 4,54 млрд лет</p>
                    <p>Кислород: 20.95%</p>
                    <p>1 год (Сидерический период): 365 суток</p>
                    <p>Продолжительность суток: 24 часа</p>
                    <p>Особенность: обитаема</p>
                </div>
            </div>

        </div>
    )
}

export default Earth;