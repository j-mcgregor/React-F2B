// Functional Component
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Props (properties) come from the 'attributes' where the compoent is called, and are an object so we use Object Notation eg .
const Header = (props) => {
  const { branding } = props;
  return(
    <React.Fragment>   
      <nav className="navbar navbar-expand-lg fixed-top text-dark">
      <Link className="navbar-brand" to="/">{ branding }</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample01">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/about" className="nav-link" style={{color:'white'}}>About</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contacts</a>
            <div className="dropdown-menu bg-dark" aria-labelledby="dropdown01">
              <Link className="dropdown-item bg-dark text-white" to="/contacts">See all contacts</Link>
              <Link className="dropdown-item bg-dark text-white" to="/contacts/new">Add Contact</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Posts</a>
            <div className="dropdown-menu bg-dark" aria-labelledby="dropdown02">
              <Link className="dropdown-item bg-dark text-white " to="/posts">See all posts</Link>
              <Link className="dropdown-item bg-dark text-white " to="/posts/new">Create Post</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </React.Fragment>
  );
};

// This is sick. So even though Header is an anonymous function (though I probably shouldn't call it that) you can use defaultProps to set key-value pairs if a prop isn't sent down
Header.defaultProps = {
  branding: 'My App Component'
}

// Still not 100% certain the point of PropTypes but Traversy mentions validation, so checking a particular Prop is of a certain type. It doesn't break it but is another level of security
Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header;