import React from 'react';
import './intro.scss';

const Intro = React.memo((props) => {


    return (
        <div className='intro'>
            <div className='intro_text'>
                <span className={
                    props.textIntro === 0 ? 'one':
                    props.textIntro === 1 ? 'two':
                    props.textIntro === 2 ? 'three':
                    props.textIntro === 3 ? 'four': null}>{props.selectText[props.textIntro]}</span>
            </div>  
        </div>
    )
})

export default Intro;