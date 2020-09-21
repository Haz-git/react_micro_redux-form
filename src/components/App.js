import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Form from './Form';
import Landing from './Landing';
import NameList from './NameList';

const App = () => {
    return (
        <div className='ui container'>
            <div>
                <BrowserRouter>
                    <Navigation />
                    <Route path='/' exact component={Landing} />
                    <Route path='/form' exact component={Form} />
                    <Route path='/namelist' exact component={NameList} />
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;