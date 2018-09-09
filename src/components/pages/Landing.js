import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <main role="main" className="main">
      {/* JUMBOTRON */}
      <div className="d-flex jumbotron text-center">
        <div className="text-center my-auto">
          <h1 className="display-2">A Golden Ticket</h1>
          <p className="lead">Well, kind of. Not really. More of a chance to show off what I can do with React and Context</p>
          <h5 className="display-5">Adapted and expanded by <a href="https://www.linkedin.com/in/jack-mcgregor/" target="_blank">Jack McGregor</a></h5>
          <h6 className="display-6">Initial tutorial by <a href="https://www.traversymedia.com/" target="_blank">Traversy Media</a></h6>
        </div>
      </div>
      {/* DIVIDER 1 */}
      <section className="half-section bg-light">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 mx-auto my-auto align-middle">
              <h2>In a nutshell, I owe this page to...</h2>
            </div>
          </div>
        </div>
      </section>
      {/* DIVIDER 2 */}
      <section className="half-section bg-dark text-white">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 mx-auto align-middle">
              <h2>Traversy Media</h2>
              <p className="lead mb-5 text-justify">Hands down the best online tutor I've come across. Honestly no idea how he both fits everything in his head and finds the time to teach it</p>
              <p className="lead mb-5">
                Shine on you crazy diamond
              </p>
            </div>
            <div className="col-sm-6 mx-auto icon-container">
              <a href="https://www.youtube.com/traversymedia" target="_blank"><i className="fab fa-youtube"></i></a>
              <a href="https://twitter.com/traversymedia?lang=en" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="https://www.patreon.com/traversymedia" target="_blank"><i className="fab fa-patreon"></i></a>
            </div>
          </div>
        </div>
      </section>
      {/* DIVIDER 3 */}
      <section className="half-section bg-info text-white">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 mx-auto align-middle">
              <h2>React and the Context API</h2>
              <p className="lead mb-5">What a wonderful marvel of modern software engineering. EJS and ERB were undoubtedly game-changers, as was jQuery, but React is the (kind-of) new kid on the block</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}