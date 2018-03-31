import React from 'react'
import PropTypes from 'prop-types'

import FormGroup from './FormGroup'
import Label from './Label'
import TextArea from './TextArea'
import ValidationErrors from './ValidationErrors'

const TextAreaGroup = props => {
  const hasErrors = props.errors.length > 0
  return (
    <FormGroup>
      <Label htmlFor={props.id}>{props.label}</Label>
      <TextArea
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

TextAreaGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  errors: PropTypes.array
}

TextAreaGroup.defaultProps = {
  errors: []
}

export default TextAreaGroup
