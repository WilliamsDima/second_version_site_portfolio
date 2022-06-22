import React from 'react';
import './main.scss';
import Navbar from './Navbar/Navbar';
import { Route } from 'react-router-dom';
import Preloder from '../../Preloder/Preloder';
import withSuspense from '../../hoc/withSuspense';
const PageWorks = React.lazy(() => import('./Pages/PageWorks/PageWorks'));
const PageSendMe = React.lazy(() => import('./Pages/PageSendMe/PageSendMe'));
const PageSkills = React.lazy(() => import('./Pages/PageMySkills/PageSkills'));
const PageAboutMe = React.lazy(() => import('./Pages/PageAboutMe/PageAboutMe'));
const PageIntro = React.lazy(() => import('./Pages/PageIntro/PageIntro'));

const Main = (props) => {


    let skip = () => {
        props.skipIntroAC()
    }

    return (
        <>
            <Preloder preloder={props.preloder}/>

            <div className={props.mainStart ? 'main skip' : 'main'} onClick={skip}>
          
                <div className='content'>

                    <Route exact path='/' render={withSuspense(PageIntro, {
                        skipIntro:props.skipIntro})}/>

                    <Route exact path='/about_me'  render={ withSuspense(PageAboutMe) }/>

                    <Route exact path='/works' render={ withSuspense(PageWorks, {
                        works:props.works, 
                        windowWork:props.windowWork, 
                        selectWork:props.selectWork,

                        closeWindow:props.closeWindow,
                        openWindow:props.openWindow
                    })}/>


                    <Route exact path='/skills'  render={ withSuspense(PageSkills) }/>

                    <Route exact path='/send' render={ withSuspense(PageSendMe) }/>

                </div>

                <Navbar onONPreloderAC={props.onONPreloderAC} onPreloderAC={props.onPreloderAC}/>

            </div>
        </>
    )
}

export default Main;