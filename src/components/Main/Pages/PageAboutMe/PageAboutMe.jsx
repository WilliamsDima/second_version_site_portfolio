import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutMeBlackHole from './AboutMeBlackHole';
import AboutMeText from './AboutMeText';
import './pageAboutMe.scss';


const PageAboutMe = (props) => {

    document.title = 'About me';
    
    return (
        <div className='about-me'>

           <AboutMeText />

           <AboutMeBlackHole />
        
        </div>
    )
}

export default PageAboutMe;