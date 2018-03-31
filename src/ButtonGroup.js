import React from 'react'
import PropTypes from 'prop-types'

const ButtonGroup = (props) => {
  const classes = ['btn-group'].concat(props.extraClasses)
  return (
    <div className={classes.join(' ')} role="group" aria-label={props.ariaLabel}>
      { props.children }
    </div>
  )
}

ButtonGroup.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  extraClasses: PropTypes.array
}

ButtonGroup.defaultProps = {
  extraClasses: []
}

export default ButtonGroup
