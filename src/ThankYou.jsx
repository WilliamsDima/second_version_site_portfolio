import React from 'react';
import './thank-you.scss';
import Stars from './components/Wrappers/Stars';
import eva from './assets/images/thank-eva.png';
import {NavLink} from "react-router-dom";


const ThankYou = (props) => {

  let close = () => {
    props.closeThankPage()
  }

  return (
    <div className="thank-you">
       <Stars skipIntro={true}/>

       <div className="gratitude-text">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#08FDD8" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
          <img src={eva}/>
          <p>Thank you!</p>
      </div>
      <NavLink to='/' className='back-to-main' onClick={close}>&#10006;</NavLink>
    </div>
  );
}

export default ThankYou;
