import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import formReducer from './reducers';

render(
    <Provider store={createStore(formReducer)}>
        <App />
    </Provider>,
    document.getElementById('root')
)

