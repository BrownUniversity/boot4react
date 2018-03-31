import React from 'react'
import PropTypes from 'prop-types'

import FormGroup from './FormGroup'
import Label from './Label'
import Text from './Text'
import ValidationErrors from './ValidationErrors'

const TextInputGroup = props => {
  const hasErrors = props.errors.length > 0
  return (
    <FormGroup>
      <Label htmlFor={props.id}>{props.label}</Label>
      <Text
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        hasErrors={hasErrors}
      />
      <ValidationErrors errors={props.errors} />
    </FormGroup>
  )
}

TextInputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  errors: PropTypes.array
}

TextInputGroup.defaultProps = {
  errors: []
}

export default TextInputGroup
