import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styles
import './general.scss';
import './app-styles.scss'
// Components

import Sidebar from '../Sidebar';
import Main from '../Main';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Sidebar />
                <Route path="/" component={Main} exact/>
            </div>
        </Router>
    )
}

export default App;
