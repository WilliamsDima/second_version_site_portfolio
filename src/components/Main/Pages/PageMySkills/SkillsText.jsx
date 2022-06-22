import React from 'react';
import './pageSkills.scss';
import {NavLink} from "react-router-dom";


const SkillsText = (props) => {

   

    return (
        <div className="skills-text">
            
            <p className="span-text" aria-label="CodePen">
                <span data-text="М">М</span>
                <span data-text="о">о</span>
                <span className="m-r" data-text="и">и</span>
                <span data-text="н">н</span>
                <span data-text="а">а</span>
                <span data-text="в">в</span>
                <span data-text="ы">ы</span>
                <span data-text="к">к</span>
                <span data-text="и">и</span>
            </p>
        
            <div className="description">
                <p>В 2016 году я первый раз шагнул в мир IT, с тех пор понял что хочу этим заниматься. Были неизбежные длительные паузы в изучении веб разработки, на которые, к сожалению, я не мог повлиять, но вскоре быстро наверстал упущенное. Также имею небольшой опыт в языке C#, на котором я создал свою первую аркадную игру под android на движке Unity и опубликовал её в google play. До этого изучал язык Java и применял его в android studio. Уровень знаний английского языка - А1.</p>
                <br/>
                <p>Сейчас я создаю адаптивные сайты и web приложения на React + Redux, качество которых растёт с каждым новым проектом. Ко всем своим проектам я стараюсь применять самые последние технологии в front-end разработке, это не только ускоряет мою работу над ними, но и в итоге сайт или приложение будет оптимизированным и адаптивным.</p>
                <br/>
                <p>Более подробно познакомится с работами можно на моём <a className="text-link" href="https://github.com/WilliamsDima">github</a>. Если есть какие-то вопросы то можете связаться со мной через <NavLink className="text-link" to="/send">телеграмм</NavLink> или через социальные сети.</p>
            </div>
        </div>
    )
}

export default SkillsText;