import React from 'react';
import './bigBang.scss';


const BigBang = React.memo((props) => {

    let skipIntro = () => {
        props.skipIntroAC()
    }


    return (
        <div id="big-bang" className={props.bigBang ? 'bang disable' : 'bang'} onClick={skipIntro}>
            <canvas id="bang"></canvas>
	    </div>
    )
})

export default BigBang;