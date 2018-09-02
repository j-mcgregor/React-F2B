import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={ label }>{ label }</label>
      <input 
        className={
          // classnames is how we can have conditional classes
          classnames(
            'form-control form-control-lg', 
            { 'is-invalid': error }
          )
        }
        type={ type }
        placeholder={ placeholder }
        name={name}
        value={ value }
        onChange={ onChange }
      />
      {/* If there's an error then load an error element */}
      { error && <div className="invalid-feedback">{ error }</div>}
      
    </div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;
