import React from 'react'
import PropTypes from 'prop-types'

const ButtonToolBar = (props) => {
  const classes = ['btn-toolbar'].concat(props.extraClasses)
  return (
    <div className={classes.join(' ')} role="toolbar" aria-label={props.ariaLabel}>
      {props.children}
    </div>
  )
}

ButtonToolBar.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  extraClasses: PropTypes.array
}

ButtonToolBar.defaultProps = {
  extraClasses: []
}

export default ButtonToolBar
