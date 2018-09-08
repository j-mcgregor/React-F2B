import React, { Component } from 'react';
// Use Hash Router for deployment to GH Pages HashRouter
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Contacts
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
// Posts
import Posts from './components/posts/Posts';
import AddPost from './components/posts/AddPost';
import ShowPost from './components/posts/ShowPost';
import EditPost from './components/posts/EditPost';
// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// Pages
import Landing from './components/pages/Landing';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
// import Test from './components/test/Test';

// Bring in the Provider
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

class App extends Component {
  render() {

    return (
      // Provider is outermost component
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding="JPH with React"/>
            <div className="container-fluid">
              <Switch>
                {/* Landing */}
                <Route exact path="/" component={ Landing } />
                {/* Contacts */}
                <Route exact path="/contacts" component={Contacts}/>
                <Route exact path="/contacts/new" component={AddContact}/>
                <Route exact path="/contacts/:id/edit" component={EditContact}/>
                <Route exact path="/about" component={About}/>
                {/* Posts */}
                <Route exact path="/posts" component={ Posts } />
                <Route exact path="/posts/new" component={ AddPost } />
                <Route exact path="/posts/:id" component={ ShowPost } />
                <Route exact path="/posts/:id/edit" component={ EditPost } />
                {/* <Route exact path="/test" component={Test}/> */}
                <Route component={NotFound}/>
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
