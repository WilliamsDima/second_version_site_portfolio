import React from 'react';
import './App.scss';
import Intro from './components/Intro/Intro';
import MainContainer from './components/Main/MainContainer';
import BigBang from './components/Wrappers/BigBang';
import ThankYou from './ThankYou';
// import Preloser from './Preloder/Preloder';


const App = React.memo((props) => {

  
  return (
    <div className="app">
      {/* <Preloser /> */}
      {props.sendForm ?  <ThankYou closeThankPage={props.closeThankPage}/> : null}
      {props.skipIntro ? null :  <Intro textIntro={props.textIntro} selectText={props.selectText}/>}
      <MainContainer />
      {props.skipIntro ? null :  <BigBang bigBang={props.bigBang} skipIntroAC={props.skipIntroAC}/> }
      {props.skipIntro ? null : <div className='btn-skip-intro'>press click to skip</div>}
    </div>
  );
})

export default App;
