import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {
  return (
    <div className="form-check">
      <input
        id={props.id}
        name={props.name}
        className="form-check-input"
        type="checkbox"
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  )
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default CheckBox
