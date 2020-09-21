import { reducer as formReducer } from 'redux-form';

const rootReducer = () => {
    return {
        form: formReducer
    }
}

//I guess formReducer is considered an object and therefore not a function. I'm creating a function to return the object formReducer.

export default rootReducer;