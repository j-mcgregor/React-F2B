// This page now holds Application-level state within the Provider.
// We can use the Context API to do this.
// Context API has:
// Provider (application-leve state)
// Consumer (one way in which we can access the state in the Provider)
// We wrap the application inside the <Provider> in App.js so every
// component within has access to it
import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

// Actions (Dispatch) are just functions to manipulate state, but they can also be seen as objects with a certain TYPE, a capitalised string of what it does
// The reducer will take in the current state and the action to be performed
// PAYLOAD is just some data you want to send along with your action
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        // Instead of doing .push(), we can alter the contacts state like so:
        contacts: [action.payload, ...state.contacts]
      }
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact )
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    contacts:[],
    // Dispatch is part of our state
    // When we have a Consumer, dispatch should be accessible from anywhere
    dispatch: action => this.setState(state => reducer(state,action))
  }

  // We can use Async/Await to make the calls more asynchronous
  async componentDidMount(){
    const res = await axios
      .get('https://jsonplaceholder.typicode.com/users');
      
    this.setState({ contacts: res.data })
  }

  // Anything you want to be accessible throughout your application you can put in a property called value
  render() {
    return(
      <Context.Provider value={this.state} >
        { this.props.children }
      </Context.Provider>
    )
  }
}

// Below line is so we can call <Consumer /> instead of <Context.Consumer />
export const Consumer = Context.Consumer;


