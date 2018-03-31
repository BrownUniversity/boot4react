import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import FormGroup from './FormGroup'
import Select from './Select'

class ThreeRelationControls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.relationId,
      [props.firstName]: props.firstValue,
      [props.secondName]: props.secondValue
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, dataType = 'string') {
    let property = event.target.name, value = event.target.value
    switch(dataType) {
      case 'integer' :
          value = parseInt(value)
        break;
    }

    this.setState(prevState => {
      prevState[property] = value
      if (prevState.id !== '') {
        this.props.handleChange(event, {...prevState})
      }
      return prevState
    })
  }

  render() {
    return (
      <FormGroup extraClasses={['form-inline']}>
        <Select
          name={this.props.firstName}
          value={this.state[this.props.firstName]}
          onChange={(e) => this.handleChange(e, this.props.firstDataType)}
          options={this.props.firstOptions}
          blankOption={this.props.firstBlankOption}
          extraClasses={['mr-1']}
        />
        <Select
          name={this.props.secondName}
          value={this.state[this.props.secondName]}
          onChange={(e) => this.handleChange(e, this.props.secondDataType)}
          options={this.props.secondOptions}
          blankOption={this.props.secondBlankOption}
          extraClasses={['mr-1']}
        />
        <Button
          onClick={(e) => this.props.handleButtonClick(e, {...this.state})}
        >{this.props.buttonText}</Button>
      </FormGroup>
    )
  }
}

ThreeRelationControls.propTypes = {
  relationId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  firstName: PropTypes.string.isRequired,
  firstValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  firstOptions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.string
  })).isRequired,
  secondName: PropTypes.string.isRequired,
  secondValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  secondOptions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.string
  })).isRequired,
  buttonText: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

ThreeRelationControls.defaultProps = {
  firstDataType: 'string',
  secondDataType: 'string'
}
export default ThreeRelationControls
