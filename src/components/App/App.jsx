import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import './general.scss';

// Components

import Sidebar from '../Sidebar';
import Main from '../Main';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Main />
                <Sidebar />
            </div>
        </Router>
    )
}

export default App;
