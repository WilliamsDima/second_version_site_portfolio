import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './pageSendMe.scss';


const MySendForm = (props) => {

    return (
        <form className='form' onSubmit={props.handleSubmit}>

            <div className="block__name">
                <Field className="form-name" component={'input'} name={'username'} placeholder="Имя"/>
                <span className="line"></span>
            </div>

            <div className="block__email">
                <Field className="form-mail" type={'email'} name={'email'} component={'input'} placeholder="Email"/>
                <span className="line"></span>
            </div>

            <div className="block__message">
                <Field className="form-message" component={'textarea'} name={'text'} placeholder="Сообщение"/>
                <span className="line"></span>
            </div>
            
            <button className="btn-form">отправить</button>
            
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(MySendForm)

export default LoginReduxForm;