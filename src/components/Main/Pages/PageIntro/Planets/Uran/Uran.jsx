import React from 'react';
import './uran.scss';


const Uran = (props) => {


    return (
        <div className='uran-orbit'>

            <div className='planet-wrap'>

            <div className="uran" id="uran">

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
                <p>Уран:</p>
                <p>Возраст: 4,5 млрд лет</p>
                <p>Кислород: нету</p>
                <p>1 год (Сидерический период): 89 земных лет</p>
                <p>Продолжительность суток: 7 часов 14 минут</p>
                <p>Особенность: Очередной газовый гигант, имеет специфичный наклон</p>
            </div>

            </div>

        </div>
    )
}

export default Uran;