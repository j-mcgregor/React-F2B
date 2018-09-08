import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {

  render() {
    // We no longer want to get the contacts from the component state
    return(
      <Consumer>
        { value => {
          const { contacts } = value;
          return(
            // React.Fragment is a good way of removing unnecessary divs (eg those without classes)
            <div className="container my-5 py-5">
              <h1 className="display-5 mb-2">
                <span className="text-danger">Contact List</span>
              </h1>
              <div className="row">
                { contacts.map(contact => (
                  <Contact 
                  key={ contact.id } 
                  contact={ contact }
                  />
                ))}
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Contacts;