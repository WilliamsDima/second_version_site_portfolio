import React from 'react';
import { NavLink } from 'react-router-dom';
import './textInfo.scss';


const TextInfo = (props) => {

    return (
        <div className="info">
            <div className="text__content">
                <p className="text__me">Hi, I’m&nbsp; 
                    <span className="glitch" data-text="Dmitry">Dmitry</span>
                </p>
                
                <p className="span-text" aria-label="CodePen">
                <span data-text="w">w</span>
                <span data-text="e">e</span>
                <span className="m-r" data-text="b">b</span>
                <span data-text="d">d</span>
                <span data-text="e">e</span>
                <span data-text="v">v</span>
                <span data-text="e">e</span>
                <span data-text="l">l</span>
                <span data-text="o">o</span>
                <span data-text="p">p</span>
                <span data-text="e">e</span>
                <span data-text="r">r</span>
                </p>

                <p className="prof__me">Front End Developer / and just a good person</p>
                
                <div className="send-link"><NavLink to='/send' className="send-btn">написать мне</NavLink></div>
            </div>
        </div>
    )
}

export default TextInfo;