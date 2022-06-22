import React from 'react';
import { connect } from 'react-redux';
import LoginReduxForm from './MySendForm';
import { formThunk } from '../../../../redux/reducers/mainReducer';


class MySendFormContainer extends React.Component {

    onSubmit = (formData) => {
        this.props.formThunk(formData) 
    }

    render() {
        return <LoginReduxForm onSubmit={this.onSubmit}/>
    }
}

let mapStateToProps = (state) => {
    
    return {
      
    }
}


export default connect(mapStateToProps, {
    formThunk
})(MySendFormContainer)
