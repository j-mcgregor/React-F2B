import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Contacts
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
// Layout
import Header from './components/layout/Header';
// Pages
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
// import Test from './components/test/Test';

// Bring in the Provider
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {

    return (
      // Provider is outermost component
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager"/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/contacts/add" component={AddContact}/>
                <Route exact path="/contacts/:id/edit" component={EditContact}/>
                <Route exact path="/about" component={About}/>
                {/* <Route exact path="/test" component={Test}/> */}
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
