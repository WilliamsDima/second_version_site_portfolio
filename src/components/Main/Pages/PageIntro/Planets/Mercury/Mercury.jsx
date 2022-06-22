import React from 'react';
import './mercury.scss';


const Mercury = (props) => {


    return (
        <div className='mercury-orbit'>

            <div className='planet-wrap'>

            <div className="mercury" id="mercury">

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
                <p>Меркурий:</p>
                <p>Возраст: 4,6 млрд лет</p>
                <p>Кислород: 42%</p>
                <p>1 год (Сидерический период): 88 земных суток</p>
                <p>Продолжительность суток: 176 земных суток</p>
                <p>Особенность: Вообще, день на Меркурии — это уникальное явление для Солнечной системы. И всё из-за близкого расположения к Солнцу. Кроме того, из-за наклона планеты, на его северном полюсе вообще всегда ночь, и там даже предполагается наличие водяного льда в кратерах – Солнце туда не заглядывает и поверхность не нагревается.</p>
            </div>

            </div>

        </div>
    )
}

export default Mercury;