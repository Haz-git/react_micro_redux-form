import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

const nameField = ({ input }) => {
    return (
        <div className='field'>
            <input {...input} type='text' />
        </div>  
    )
}

const ageField = ({ input }) => {
    return (
        <div className='field'>
            <input {...input} type='text' />
        </div>
    )
}

const onSubmit = (formValues) => {
    return formValues;
}

const Form = ({ handleSubmit }) => {

    return (
        <div>
            <h1>Hello! Welcome to the Form Page</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='ui form'>
                <div>
                    <label>Name</label>
                    <Field name='nameField' component={nameField} />
                </div>
                <div>
                    <label>Age</label>
                    <Field name='ageField' component={ageField} />
                </div>
                <button type='submit' className='ui primary button'>Submit</button>
            </form>
        </div>

    )
}


export default reduxForm({
    form: 'reactForm',
})(Form);