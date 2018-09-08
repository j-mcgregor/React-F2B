import React, { Component } from 'react';
import Thumbnail from './Thumbnail';

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid mt-5 p-3 bg-dark text-white text-center gallery">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 p-4">
            <h1 className="display-4">A little bit more about myself</h1>
            <h4 className="display-6">My name's Jack and I fancy myself as digitally creative</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 offset-sm-3 p-4 text-justify">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ipsam incidunt dolores ex neque ab dicta molestias eos molestiae pariatur esse fuga perferendis, consequatur illo cumque ad repellendus ipsa rem?</p>
          </div>
        </div>
        <div className="row">
          <Thumbnail 
            image="./img/placeholder.gif" 
            title="Piñata"  
            link="https://the-real-pinata.herokuapp.com/" 
            byline="The Fun Way to Start your Day"
            description="Piñata was a group project created during my course at General Assembly using the MEAN stack"
            target="target-1"
          />
          <Thumbnail 
            image="./img/placeholder.gif" 
            title="The Circle of Young Intrapreneurs"  
            link="https://coyi-temp-staging.herokuapp.com/" 
            byline="Do Well, Do Good"
            description="The Circle of Youung Intrapreneurs is an ongoing pro-bono project built initially as a Rails app. The next step will be to rebuild it using a Rails API and a React front end "
            target="target-2"
          />
          <Thumbnail 
            image="./img/placeholder.gif" 
            title="DevConnector"  
            link="" 
            byline="First full stack MERN application"
            description="This was built coding along with Traversy Media's MERN stack course on Udemy, using mLab as its Mongo database, NodeJS, Express and React with Redux"
            target="target-3"
          />
          <Thumbnail 
            image="./img/placeholder.gif" 
            title="Piñata"  
            link="https://github.com/patchyj/Killing-Eve" 
            byline=""
            description="'The landing page for upcoming TV thriller Killing Eve, built using HTML5 and SASS"
            target="target-4"
          />
          <Thumbnail 
            image="./img/placeholder.gif" 
            title="Rails API with JWT built TDD"  
            link="" 
            byline=""
            description="This was the initial code-along of Austin Kabiru's amazing tutorial on scotch.io (see link below), building a RESTful JSON Rails API with JWT authentication fully TDD"
            target="target-5"
          />
          <Thumbnail 
            image="./img/placeholder.gif" 
            title="Rails API with JWT built TDD with React"  
            link="" 
            byline=""
            description="Building on Austin Kabiru's code-along, I built another Rails API for a potential User Management System, using JWT, Rails API, PostgresQL, RSpec, FactoryBot, React and Bootstrap"
            target="target-6"
          />
          <Thumbnail 
            image="./img/placeholder.gif" 
            title=""  
            link="" 
            byline=""
            description=""
            target="target-7"
          />
          <Thumbnail 
            image="./img/placeholder.gif" 
            title=""  
            link="" 
            byline=""
            description=""
            target="target-7"
          />
        </div>
      </div>
    )
  }
}

