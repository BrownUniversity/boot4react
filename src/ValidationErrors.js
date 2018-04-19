import React from 'react'
import PropTypes from 'prop-types'

const ValidationErrors = props => {
  if (props.errors.length > 0) {
    return (
      <div className="invalid-feedback" style={{ display: 'block' }}>
        {props.errors.join(' | ')}
      </div>
    )
  }
  return null;
}

ValidationErrors.propTypes = {
  errors: PropTypes.array
}

ValidationErrors.defaultProps = {
  errors: []
}

export default ValidationErrors
