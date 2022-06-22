import React, { useState } from 'react';
import './pageIntro.scss';
import Earth from './Planets/Earth/Earth';
import Stars from '../../../Wrappers/Stars'
import Mars from './Planets/Mars/Mars';
import Jupiter from './Planets/Jupiter/Jupiter';
import Saturn from './Planets/Saturn/Saturn';
import TextInfo from './TextInfo';
import sun from '../../../../assets/images/planets/sun.gif';
import Mercury from './Planets/Mercury/Mercury';
import Venus from './Planets/Venera/Venus';
import Uran from './Planets/Uran/Uran';
import Neptune from './Planets/Neptune/Neptune';



const PageIntro = (props) => {

    document.title = "Main"

    let [scale, setScale] = useState(400)


    let mapScale = (e) => {
        scale += e.deltaY;
        if(scale >= 500) {
            e.deltaY = 500
            scale = e.deltaY
            setScale(scale)
        } else if(scale <= 100) {
            e.deltaY = 100
            scale = e.deltaY
            setScale(scale)
        } else {
            setScale(scale)
        }
    }

    let stylePlanets = {
        transform: 'scale('+ scale/1000 + ')'
    }

 
    return (
        <div className='page-intro' onWheel={mapScale}> 
            <Stars skipIntro={props.skipIntro}/>
            
            <TextInfo />

            <div className='map-planet' style={ stylePlanets }>
                <img src={sun} className='sun'/>
                <Venus />
                <Mercury />
                <Earth />
                <Mars />
                <Jupiter />
                <Saturn />
                <Uran />
                <Neptune />
            </div>
           

            <div className='my-text'>
                <p>&lt;sorry I <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg> space&gt;</p>
                <p>&lt;you get what you give you&gt;</p>
            </div>
        </div>
    )
}

export default PageIntro;