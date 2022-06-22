import React from 'react';
import './pageSkills.scss';


const Skills = (props) => {

    return (
        <div className="skills-statistics">
            
            <div className="skills__item">
                <p className="text-item">JS:</p>
                <div className="span-statistic" id="skill-js"></div>
            </div>
            
            <div className="skills__item">
                <p className="text-item">React:</p>
                <div className="span-statistic" id="skill-react"></div>
            </div>

            <div className="skills__item">
                <p className="text-item">Redux:</p>
                <div className="span-statistic" id="skill-redux"></div>
            </div>
            
            <div className="skills__item">
                <p className="text-item">Node.js:</p>
                <div className="span-statistic" id="skill-node"></div>
            </div>
            
            <div className="skills__item">
                <p className="text-item">Jquery:</p>
                <div className="span-statistic" id="skill-jquery"></div>
            </div>
            
            <div className="skills__item">
                <p className="text-item">PHP:</p>
                <div className="span-statistic" id="skill-php"></div>
            </div>

            <div className="skills__item">
                <p className="text-item">SQL:</p>
                <div className="span-statistic" id="skill-sql"></div>
            </div>
            
            <div className="skills__item">
                <p className="text-item">C#:</p>
                <div className="span-statistic" id="skill-c"></div>
            </div>
            
            <div className="skills__item">
                <p className="text-item">Java:</p>
                <div className="span-statistic" id="skill-java"></div>
            </div>
            
        </div>
    )
}

export default Skills;