// Functional Component
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Props (properties) come from the 'attributes' where the compoent is called, and are an object so we use Object Notation eg .
const Header = (props) => {
  const { branding } = props;
  return(
    <div>
      <nav className="navbar navbar-expand-xs navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">{ branding }</a>
          <Link to="/" className="nav-link" style={{color:'white'}}>
            <i className="fas fa-home" /> 
          </Link>
          <Link to="/contacts/add" className="nav-link" style={{color:'white'}}>
            <i className="fas fa-plus"/> 
          </Link>
          <Link to="/about" className="nav-link" style={{color:'white'}}>
            <i className="fas fa-question"/> 
          </Link>
        </div>
      </nav>
    </div>
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