import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumericInput from 'react-numeric-input';
import {
  FormGroup,
  Label,
} from 'reactstrap';
import ValidationErrors from './ValidationErrors'

class NumericInputGroup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(num) {
    this.props.onChange({
      target: {
        name: this.props.name,
        value: num,
      }
    });
  }

  render() {
    const className = (this.props.errors.length > 0) ? 'form-control is-invalid' : 'form-control';
    return (
      <FormGroup>
        <Label for={this.props.id}>{this.props.label}</Label>
        <NumericInput
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}
          className={className}
          style={this.props.style}
          precision={this.props.precision}
        />
        <ValidationErrors errors={this.props.errors} />
      </FormGroup>
    );
  }
}

NumericInputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func,
  errors: PropTypes.array,
  style: PropTypes.object,
  precision: PropTypes.number,
};

NumericInputGroup.defaultProps = {
  errors: [],
};

export default NumericInputGroup;
