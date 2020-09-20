import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Form from './Form';
import Landing from './Landing';

const App = () => {
    return (
        <Provider>
            <div className='ui container'>
                <div>
                    <BrowserRouter>
                        <Navigation />
                        <Route path='/' exact component={Landing} />
                        <Route path='/form' exact component={Form} />
                    </BrowserRouter>
                </div>
            </div>
        </Provider>
    )
}

export default App;