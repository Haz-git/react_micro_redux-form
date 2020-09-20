import React from 'react';
import { reduxForm, Field } from 'redux-form';

const Form = () => {

    const nameField = () => {
        return (
            <div className='field'>
                <label>Name</label>
                <input type='text'></input>
            </div>  
        )
    }

    const ageField = () => {
        return (
            <div className='field'>
                <label>Age</label>
                <input type='text'></input>
            </div>
        )
    }

    return (
        <div>
            <h1>Hello! Welcome to the Form Page</h1>
            <form className='ui form'>
                <div>
                    <Field name='nameField' component={nameField} />
                </div>
                <div>
                    <Field name='ageField' component={ageField} />
                </div>
                <button className='ui primary button'>Submit</button>
            </form>
        </div>

    )
}

export default reduxForm({
    form: 'form'
})(Form);