import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Form from './Form';
import Landing from './Landing';

const App = () => {
    return (
        <div className='ui container'>
            <div>
                <BrowserRouter>
                    <Navigation />
                    <Route path='/' exact component={Landing} />
                    <Route path='/form' exact component={Form} />
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;