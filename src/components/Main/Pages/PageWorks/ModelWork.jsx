import React from 'react';
import './modelWork.scss';

const ModelWork = (props) => {

    let closeItem = () => {
        props.closeWindow()
    }

    let works = props.works;
    
    return (
        <div className={props.windowWork ? 'window open' : 'window'}>
            <div className='model-work' onClick={closeItem}></div>
            <img className='window-img' src={works[props.selectWork === -1 ? 0 : props.selectWork].img}/>
            <a href={works[props.selectWork === -1 ? 0 : props.selectWork].link} target="_blank" className='link-git'>{works[props.selectWork === -1 ? 0 : props.selectWork].text}</a>
        </div>
        
    )
}

export default ModelWork;