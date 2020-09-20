import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div>
                <Link to='/'>Homepage</Link>
            </div>
            <div>
                <Link to='/form'>Form</Link>
            </div>
        </div>
    )
}

export default Navigation;