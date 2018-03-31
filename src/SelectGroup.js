import React from 'react'
import PropTypes from 'prop-types'

import FormGroup from './FormGroup'
import Label from './Label'
import Select from './Select'
import ValidationErrors from './ValidationErrors'

const SelectGroup = props => {
  const hasErrors = props.errors.length > 0
  return (
    <FormGroup>
      <Label htmlFor={props.id}>{props.label}</Label>
      <Select
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        hasErrors={hasErrors}
        options={props.options}
        blankOption={props.blankOption}
      />
      <ValidationErrors errors={props.errors} />
    </FormGroup>
  )
}

SelectGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
      PropTypes.bool,
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  errors: PropTypes.array,
  options: PropTypes.array,
  blankOption: PropTypes.string
}

SelectGroup.defaultProps = {
  errors: [],
  blankOption: ''
}

export default SelectGroup
