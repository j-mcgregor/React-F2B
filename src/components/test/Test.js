import React, { Component } from 'react'

// ============= LIFE-CYCLE METHODS =============
class Test extends Component {
  state = {
    test:'test'
  };
  
  // componentDidMount - probably 2nd most popular after render()
  // will fire off AFTER the component has been mounted
  // Usually where you call HTTP requests
  componentDidMount(){
    console.log('component did mount...');
  }
  
  // This will run BEFORE the component has mounted
  // being deprecated
  UNSAFE_componentWillMount(){
    console.log('component will mount...');
  }

  // This will run when a component updates its state
  componentDidUpdate(){
    console.log('Component Did update');
  }
  // This will run first when a component updates its state
  // being deprecated
  UNSAFE_componentWillUpdate(){
    console.log('Component Will update');
  }

  // When component will receive new properties these will run. 
  // When you have a state in redux you can take it into a single component and map it to state
  // being deprecated
  UNSAFE_componentWillReceiveProps(nextProps, nextState){
    console.log('Component Will Receive Props');
  }

  // ============= NEW LIFECYCLE METHODS =============

  // This is replacing the _will_ lifecycle methods as React is heading towards a more asynchronous style
  // Can't setState - have to return altered
  static getDerivedStateFromProps(nextProps,prevState){
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate...');
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}

export default Test;