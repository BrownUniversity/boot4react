import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Select from './Select'
import FormGroup from './FormGroup'
import Label from './Label'

class SelectMany extends Component {

  constructor(props) {
    super(props)
    this.state = {
      options: props.options,
      selected: props.value
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleRemoval = this.handleRemoval.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.options !== this.state.options)
      this.setState({ options: nextProps.options})
  }

  handleSelect(event) {
    let selected = this.state.selected
    let value = event.target.value
    switch (this.props.valueType) {
      case 'integer' :
        value = parseInt(event.target.value)
        break;
    }
    selected.push(value)
    this.setState({ selected })
    this.handleChange()
  }

  handleRemoval(event, key) {
    let selected = this.state.selected
    let index = selected.findIndex(o => key)
    selected.splice(index, 1)
    this.setState({ selected })
    this.handleChange()
  }

  handleChange() {
    this.props.onChange({
      target: {
        name: this.props.name,
        value: this.state.selected
      }
    })
  }

  render() {
    const classes = (this.props.hasErrors) ? 'form-control is-invalid' : 'form-control'
    return (
      <FormGroup>
        <Label htmlFor={this.props.id}>{this.props.label}</Label>
        <Select
          hasErrors={this.props.hasErrors}
          id={this.props.id}
          name={this.props.name}
          onChange={this.handleSelect}
          options={this.state.options.filter(o => this.state.selected.findIndex(s => o.key == s) == -1)}
          blankOption={this.props.blankOption}
        />
        <div>
        { this.state.options.filter(o => this.state.selected.findIndex(s => o.key == s) > -1).map( (option, i) => (
          <button
            key={option.key}
            type="button"
            className="btn btn-outline-primary mr-1 mt-2"
            onClick={(e) => this.handleRemoval(e, option.key)}
          >
            {option.value} <span aria-hidden="true">&times;</span>
          </button>
        ))}
        </div>
      </FormGroup>
    )
  }
}

SelectMany.propTypes = {
  blankOption: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  hasErrors: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    value: PropTypes.string
  })),
  value: PropTypes.array,
  onChange: PropTypes.func,
  valueType: PropTypes.string
}

SelectMany.defaultProps = {
  hasErrors: false,
  options: [],
  valueType: 'string'
}

export default SelectMany
