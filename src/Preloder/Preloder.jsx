import React from 'react';
import './preloder.scss';


const Preloder = (props) => {

    return (
        <div className={props.preloder ? 'preloder hidden' : 'preloder'} id='preloder'>
           <div className='loader'></div>
        </div>
    )
}

export default Preloder;