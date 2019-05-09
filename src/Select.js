import React from 'react'
import PropTypes from 'prop-types'

const Select = props => {
  let classes = ['form-control'].concat(props.extraClasses)
  if (props.hasErrors) {
    classes.push('is-invalid')
  }
  return (
    <select
      id={props.id}
      className={classes.join(' ')}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
    >
      {props.blankOption
        ? <option key={-1} value=''>{props.blankOption}</option>
        : null
      }
      {props.options.map(option => <option key={option.key} value={option.key}>{option.value}</option>)}
    </select>
  )
}

Select.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
      ]),
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })
  ),
  blankOption: PropTypes.string,
  extraClasses: PropTypes.arrayOf(PropTypes.string)
}

Select.defaultProps = {
  extraClasses: [],
  id: null
}

export default Select
