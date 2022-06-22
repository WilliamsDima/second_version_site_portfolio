import React from 'react';
import './stars.scss';


const Stars = React.memo((props) => {


    return (
        <div className={props.skipIntro ? "stars-skay" : "stars-skay skip"}>
            <div className="stars"></div>
            <div className="twinkling"></div>
        </div>
    )
})

export default Stars;