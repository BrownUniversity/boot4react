import React from 'react'
import PropTypes from 'prop-types'

const Label = props => {
  return (
    <label htmlFor={props.htmlFor} className="form-label">{props.children}:</label>
  )
}

Label.propTypes = {
    htmlFor: PropTypes.string
}

export default Label
