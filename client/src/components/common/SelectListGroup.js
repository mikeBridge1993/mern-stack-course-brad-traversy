import React from 'react'
import PropTypes from 'prop-types'

const SelectListGroup = (
  { name,
    value,
    error,
    info,
    onChange,
    options
  }
) => {
  return (
    <div className="form-group">
      <select
        className={"form-control form-control-lg " + (error && "is-invalid")}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map(option => <option value={option.value} key={option.label}>{option.label}</option>)}
      </select>
      {error && (<div className="invalid-feedback">{error}</div>)}
    </div>
  );
}

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}


export default SelectListGroup;
