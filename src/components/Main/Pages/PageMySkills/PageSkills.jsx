import React from 'react';
import './pageSkills.scss';
import SkillsText from './SkillsText';
import Skills from './Skills';


const PageSkills = (props) => {

    document.title = 'Skills';
    
    return (
        <div className='skills'>
            <SkillsText />
            <Skills />
        </div>
    )
}

export default PageSkills;