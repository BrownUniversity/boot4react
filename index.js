import React, { Component } from 'react'

import Button from './src/Button'
import ButtonGroup from './src/ButtonGroup'
import ButtonToolBar from './src/ButtonToolBar'
import CheckBox from './src/CheckBox'
import FormGroup from './src/FormGroup'
import InputGroup from './src/InputGroup'
import Label from './src/Label'
import Select from './src/Select'
import SelectGroup from './src/SelectGroup'
import SelectMany from './src/SelectMany'
import Text from './src/Text'
import TextArea from './src/TextArea'
import TextAreaGroup from './src/TextAreaGroup'
import TextInputGroup from './src/TextInputGroup'
import ThreeRelation from './src/ThreeRelation'
import ValidationErrors from './src/ValidationErrors'

const Form = props => {
  return (
    <form>
      { props.children }
    </form>
  )
}

export {
  Button,
  ButtonGroup,
  ButtonToolBar,
  CheckBox,
  Form,
  FormGroup,
  Label,
  InputGroup,
  SelectMany,
  Text,
  TextArea,
  ValidationErrors,
  TextInputGroup,
  TextAreaGroup,
  ThreeRelation,
  Select,
  SelectGroup
}
