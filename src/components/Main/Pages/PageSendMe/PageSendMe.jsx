import React from 'react';
import './pageSendMe.scss';
import MyMap from './MyMap';
import SendForm from './SendForm';


const PageSendMe = (props) => {

    document.title = 'Connect me';

    return (
        <div className='send'>
             <MyMap />
            <SendForm />
        </div>
    )
}

export default PageSendMe;