import React from 'react'
import PropTypes from 'prop-types'

const TextArea = props => {
  const classes = (props.hasErrors) ? 'form-control is-invalid' : 'form-control'
  return (
    <textarea
      className={classes}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

TextArea.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onChange: PropTypes.func
}

export default TextArea
