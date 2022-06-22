import React from 'react';
import Stars from '../../../Wrappers/Stars';
import ModelWork from './ModelWork';
import MyWorks from './MyWorks';
import './pageWorks.scss';


const PageWorks = (props) => {

    let img = document.images;

    return (
        <div className='works'>
            <Stars skipIntro={true}/>
            <ModelWork windowWork={props.windowWork} closeWindow={props.closeWindow} works={props.works} selectWork={props.selectWork}/>
            <MyWorks works={props.works} openWindow={props.openWindow}/>
        </div>
    )
}

export default PageWorks;