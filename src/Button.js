import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  let classes = ['btn', `btn-${props.buttonType}`].concat(props.extraClasses)
  if (props.active) {
    classes.push('active')
  }
  return (
    <button type="button" className={classes.join(' ')} onClick={props.onClick}>
      { props.children }
    </button>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  buttonType: PropTypes.string.isRequired,
  extraClasses: PropTypes.array,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  active: false,
  buttonType: 'default',
  extraClasses: []
}

export default Button
