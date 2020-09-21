import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';
import { compose, createStore } from 'redux';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

//composeEnhancers must be called as a function.

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

