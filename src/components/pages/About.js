import React, { Component } from 'react';
import Thumbnail from './Thumbnail';

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid mt-5 p-3 bg-dark text-white text-center gallery">
        <div className="row">
          <div className="col-sm-6 offset-sm-3 p-4">
            <h1 className="display-4">A little bit more about myself</h1>
            <h4 className="display-6 text-center">My name's Jack McGregor and I'm a fullstack developer, graphic designer and web development instructor.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 offset-sm-3 p-4 text-justify">
            <p>This site your on now started out as a code-along to Brad Traversy's <a href="https://www.udemy.com/react-front-to-back/learn/v4/overview" target="_blank">React Front to Back</a> course on Udemy and I got a little bit carried away by adding another resource from <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSON Placeholder</a>, a landing page, this About page and styling it all with Bootstrap and SASS. You can view this site's Github Repo <a href="https://github.com/patchyj/React-F2B" target="_blank">here</a></p>
          </div>
        </div>
        <div className="row">
          <Thumbnail 
            image="./img/COYI_screenshot.png" 
            title="The Circle of Young Intrapreneurs"  
            link="https://coyi-temp-staging.herokuapp.com/" 
            byline="Do Well, Do Good"
            description="The Circle of Youung Intrapreneurs is an ongoing pro-bono project built initially as a Rails app. The next step will be to rebuild it using a Rails API and a React front end "
            target="target-2"
          />
          <Thumbnail 
            image="./img/KillingEve_screenshot.png" 
            title="Piñata"  
            link="https://github.com/patchyj/Killing-Eve" 
            byline=""
            description="'The landing page for upcoming TV thriller Killing Eve, built using HTML5 and SASS"
            target="target-4"
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
            image="./img/ReactRedux_screenshot.png" 
            title="React and Redux"  
            link="https://patchyj.github.io/React-F2B-Redux/" 
            byline="Getting better and better"
            description="An expansion of part 2 of Brad Traversy's React Front to Back course, with APIs from JSON Placeholder and Unsplash"
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
            image="./img/Pinata_screenshot.png" 
            title="Piñata"  
            link="https://the-real-pinata.herokuapp.com/" 
            byline="The Fun Way to Start your Day"
            description="Piñata was a group project created during my course at General Assembly using the MEAN stack"
            target="target-1"
          />

          <Thumbnail 
            image="./img/Oddjob_screenshot.png" 
            title="OddJob"  
            link="" 
            byline="Make the little things count"
            description="My final project at General Assembly in June 2017, made with a Rails API, Postgres and AngularJS"
            target="target-7"
          />
          <Thumbnail 
            image="./img/Bloom_screenshot.png" 
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

