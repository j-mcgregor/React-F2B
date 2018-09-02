import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import classnames from 'classnames';


class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = (contact, e) => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  }

  onDeleteClick = async (id, dispatch) => {
    // Because we're using JSONPlaceholder we can't actually save to their DB so we can't delete something we've "created"
    // Wait until Axios request is done then send dispatch
    try {
      await axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (err) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {

    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        { value => {
          const { dispatch } = value;
          // console.log(dispatch);
          
          return(
            <div className="card card-body mb-3">
              <h4>
                { contact.name }
                <i 
                  onClick={ this.onShowClick.bind(this, contact) } 
                  className={
                    // classnames is how we can have conditional classes
                    classnames(
                      'pl-2 fas ', 
                      { 
                        'fa-chevron-down': showContactInfo, 
                        'fa-chevron-right': !showContactInfo 
                      }
                    )
                  }
                  style={{ cursor: 'pointer' }}
                  />
                <i 
                  onClick={ this.onDeleteClick.bind(this, contact.id, dispatch ) }
                  className="fas fa-times" 
                  style={{ cursor:'pointer',float:'right',color:'red'}}
                  />
                <Link to={`/contacts/${contact.id}/edit`}>
                  <i 
                    className="fas fa-pencil-alt" 
                    style={{ cursor:'pointer',float:'right',color:'red',paddingRight:'15px'}}
                    />
                </Link>
              </h4>
              { showContactInfo ? (<ul className="list-group">
                <li className="list-group-item">Email: { contact.email }</li>
                <li className="list-group-item">Phone: { contact.phone }</li>
              </ul>) : null }
              
            </div>
          )
        }}
      </Consumer>
      
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;