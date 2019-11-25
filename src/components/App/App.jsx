import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styles
import './general.scss';
import './app-styles.scss'
// Components

import Sidebar from '../Sidebar';
import Main from '../Main';
import Catalog from '../Catalog';
import Contacts from '../Contacts';
import Distribution from '../Distribution';
import Clients from '../Clients';
import About from '../About';
import Gallery from '../Gallery';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Sidebar />
                <Route path="/" component={Main} exact/>
                <Route path="/catalog" component={Catalog} exact/>
                <Route path="/contacts" component={Contacts} exact/>
                <Route path="/distribution" component={Distribution} exact/>
                <Route path="/clients" component={Clients} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/gallery" component={Gallery} exact/>
            </div>
        </Router>
    )
}

export default App;
