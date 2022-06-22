import React from 'react';
import { NavLink } from 'react-router-dom';
import './pageAboutMe.scss';
import vk from '../../../../assets/images/social/vk.svg';
import instagram from '../../../../assets/images/social/instagram.svg';
import twitter from '../../../../assets/images/social/twitter.svg';
import facebook from '../../../../assets/images/social/facebook.svg';


const AboutMeText = (props) => {

    return (
           <div className="about-me-text">
                <p className="span-text" aria-label="CodePen">
                    <span data-text="О">О</span>
                    <span data-text="б">б</span>
                    <span className="m-r" data-text="о">о</span>
                    <span data-text="м">м</span>
                    <span data-text="н">н</span>
                    <span data-text="е">е</span>
                </p>
            
                <div className="text-me">
                    
                    <p>Я Front-End разработчик. 
                        Живу в России, создаю красивые сайт с соответствующей тематикой, web приложения с 
                        интуитивно понятным дизайном, используя React и Redux. Ежедневно повышаю свой скил в IT.</p>
                    <br/>
                    <p>Ответсвенный человек, умею гуглить и решать проблеммы. 
                        Перфекционист не только в жизни, но и в своей работе. Поклонник IT и всех новых технологий, 
                        люблю науки о космосе: астрономия, астро-физика. Веду здоровый образ жизни, читаю документацию.</p>
                    <br/>
                    <p>Хочу менять мир, решая задачи разного калибра.</p>
                </div>
                <NavLink to='/send' className="link-add-team">взять в команду</NavLink>

                <div className='social'>
                    <a href="https://vk.com/williamsdy" target='_blank'>
                        <img src={vk}/>
                    </a>
                    <a href="https://www.instagram.com/williams.css/" target='_blank'>
                        <img src={instagram}/>
                    </a>
                    <a href="https://twitter.com/DmitryWilliam" target='_blank'>
                        <img src={twitter}/>
                    </a>
                    <a href="https://www.facebook.com/people/Дмитрий-Леметин/100009919381940/" target='_blank'>
                        <img src={facebook}/>
                    </a>
                </div>

            </div>
    )
}

export default AboutMeText;