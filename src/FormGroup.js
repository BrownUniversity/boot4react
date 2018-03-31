import React from 'react'
import PropTypes from 'prop-types'

const FormGroup = props => {
  const classes = ['form-group'].concat(props.extraClasses).join(' ')
  return (
    <div className={classes}>
      { props.children }
    </div>
  )
}

FormGroup.propTypes = {
  extraClasses: PropTypes.array
}

FormGroup.defaultProps = {
  extraClasses: []
}

export default FormGroup
