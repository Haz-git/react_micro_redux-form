import React from 'react';
import { connect } from 'react-redux';

const NameList = ({ form }) => {

    console.log('This is the initial render: ', form);

    const renderList = () => {
        if (Object.keys(form).length === 0 && form.constructor === Object) {
            return (
                <div>
                    There are no registered Persons!
                </div>
            )
        }

        return (
            <div>
                {form.reactForm.values.nameField}
            </div>
        )
    }


    return (
        <div>
            {renderList()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        form: state.form,
    }
}

export default connect(mapStateToProps)(NameList);