import React from 'react';
import './pageSendMe.scss';
import MySendFormLoginContainer from './MySendFormContainer';


const SendForm = (props) => {


    return (
        <div className="send-form">
        
            <p className="span-text" aria-label="CodePen">
                <span data-text="Н">Н</span>
                <span data-text="а">а</span>
                <span data-text="п">п</span>
                <span data-text="и">и</span>
                <span data-text="с">с</span>
                <span data-text="а">а</span>
                <span data-text="т">т</span>
                <span className="m-r" data-text="ь">ь</span>
                <span data-text="м">м</span>
                <span data-text="н">н</span>
                <span data-text="е">е</span>
            </p>

            
            <p className="text-send">Свяжись со мной если я стал тебе интересен. Даже если просто есть вопросы ко мне.</p>

           <MySendFormLoginContainer />
        
        </div>
    )
}


export default SendForm;