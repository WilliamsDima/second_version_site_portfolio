import React from 'react';
import './jupiter.scss';


const Jupiter = (props) => {


    return (
        <div className='jupiter-orbit'>

            <div className='planet-wrap'>

            <div className="jupiter" id="jupiter">

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
                <p>Юпитер:</p>
                <p>Возраст: 4,6 млрд лет</p>
                <p>Кислород: нету</p>
                <p>1 год (Сидерический период): 11.86 земных лет</p>
                <p>Продолжительность суток: 9 часов 55 минут 40 секунд</p>
                <p>Особенность: Несмотря на гигантские размеры, эта планета крутится, как волчок — пока у нас проходят сутки, 
                    на Юпитере начинаются третьи. Юпитер в 2,5 раза больше всех других планет Солнечной системы вместе взятых.</p>
            </div>

            </div>

        </div>
    )
}

export default Jupiter;