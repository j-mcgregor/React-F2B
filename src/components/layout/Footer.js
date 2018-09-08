import React from 'react'

export default () => {
  return (
    <div className="container-fluid p-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <address>
              Jack McGregor <br/>
              London, UK <br/>
              jackjwmcgregor@gmail.com
            </address>
          </div>
          <div className="col-sm-4 offset-sm-4 footer-icons text-center">
            <a href=""><i className="fab fa-facebook"></i></a>
            <a href=""><i className="fab fa-linkedin"></i></a>
            <a href=""><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
