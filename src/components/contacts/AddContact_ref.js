import React, { Component } from 'react'

// ======= UNCONTROLLED COMPONENT ==== AKA a component without state
class AddContact extends Component {
  constructor(props) {
    super(props);

    // Refs are a way to grab the field input data when submitting the form wthout STATE
    // React.createRef() creates a REFERENCE that relates to the input
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }
    console.log(contact);
    
  }

  static defaultProps = {
    name: 'Fred Flinstone',
    email:'something@something.else',
    phone:'888-888-8888'
  }

  render() {
    const { name, email, phone} = this.props; 
    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Contact
        </div>
        <div className="card-body">
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                name="name"
                defaultValue={ name }
                ref={ this.nameInput }
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                name="email"
                defaultValue={ email }
                ref={ this.emailInput }

              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="text" 
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                name="phone"
                defaultValue={ phone }
                ref={ this.phoneInput }

              />
            </div>
            <input type="submit" value="Add Contact" className="btn btn-block btn-primary"/>
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;