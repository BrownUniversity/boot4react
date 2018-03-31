import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import FormGroup from './FormGroup'
import Label from './Label'
import ThreeRelationControls from './ThreeRelationControls'

class ThreeRelation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedRelations: props.value
    }

    this.handleRelationshipAddition = this.handleRelationshipAddition.bind(this)
    this.handleRelationshipRemoval = this.handleRelationshipRemoval.bind(this)
    this.handleRelationshipChange = this.handleRelationshipChange.bind(this)
    this.handleChangeForParent = this.handleChangeForParent.bind(this)
    this.getAdditionsControlName = this.getAdditionsControlName.bind(this)
    this.getChangesControlName = this.getChangesControlName.bind(this)
  }

  getAdditionsControlName(type) {
    const key = `${type}Key`
    return `${this.props.name}-${this.props[key]}`
  }

  getChangesControlName(type, id) {
    const key = `${type}Key`
    return `${this.props.name}[${id}][${this.props[key]}]`
  }

  handleRelationshipAddition(event, relation) {
    const first = this.getAdditionsControlName('first')
    const second = this.getAdditionsControlName('second')
    if ((relation[first] != '') && (relation[second] != '')) {
      this.setState(prevState => {
        let selectedRelations = prevState.selectedRelations
        let indexOfRelation = selectedRelations.findIndex(sr => {
            return (sr[this.props.firstKey] == relation[first]) &&
              (sr[this.props.secondKey] == relation[second])
        })
        if (indexOfRelation == -1) {
          selectedRelations.push({
            id: this.props.idGenerator(),
            [this.props.fixedKey]: this.props.fixedValue,
            [this.props.firstKey]: relation[first],
            [this.props.secondKey]: relation[second]
          })
        }
        this.handleChangeForParent(selectedRelations)
        return { selectedRelations }
      })
    }
  }

  handleRelationshipChange(event, relation) {
    const first = this.getChangesControlName('first', relation.id)
    const second = this.getChangesControlName('second', relation.id)
    this.setState(prevState => {
      let selectedRelations = prevState.selectedRelations
      let indexOfRelation = selectedRelations.findIndex(sr => sr.id == relation.id)
      if (indexOfRelation > -1) {
        selectedRelations.splice(indexOfRelation, 1, {
          id: relation.id,
          [this.props.fixedKey]: this.props.fixedValue,
          [this.props.firstKey]: relation[first],
          [this.props.secondKey] : relation[second]
        })
      }
      this.handleChangeForParent(selectedRelations)
      return { selectedRelations }
    })
  }

  handleRelationshipRemoval(event, relation) {
    this.setState(prevState => {
      let selectedRelations = prevState.selectedRelations
      let indexOfRelation = selectedRelations.findIndex(sr => sr.id == relation.id)
      if (indexOfRelation > -1) {
        selectedRelations.splice(indexOfRelation, 1)
      }
      this.handleChangeForParent(selectedRelations)
      return { selectedRelations }
    })
  }

  handleChangeForParent(value) {
    this.props.onChange({
      target: {
        name: this.props.name,
        value
      }
    })
  }

  render() {
    return (
      <div>
        <FormGroup>
          <Label>{this.props.label}</Label>
        </FormGroup>
        <ThreeRelationControls
          relationId=''
          firstName={this.getAdditionsControlName('first')}
          firstValue=''
          firstOptions={this.props.firstOptions}
          firstBlankOption={this.props.firstBlankOption}
          firstDataType={this.props.firstDataType}
          secondName={this.getAdditionsControlName('second')}
          secondValue=''
          secondOptions={this.props.secondOptions}
          secondBlankOption={this.props.secondBlankOption}
          secondDataType={this.props.secondDataType}
          buttonText={this.props.addButtonText}
          handleButtonClick={this.handleRelationshipAddition}
          handleChange={this.handleRelationshipChange}
        />
        {
          this.state.selectedRelations.map(relation => (
          <ThreeRelationControls
            key={relation.id}
            relationId={relation.id}
            firstName={this.getChangesControlName('first', relation.id)}
            firstValue={relation[this.props.firstKey]}
            firstOptions={this.props.firstOptions}
            firstDataType={this.props.firstDataType}
            secondName={this.getChangesControlName('second', relation.id)}
            secondValue={relation[this.props.secondKey]}
            secondOptions={this.props.secondOptions}
            secondDataType={this.props.secondDataType}
            buttonText='Remove'
            handleButtonClick={this.handleRelationshipRemoval}
            handleChange={this.handleRelationshipChange}
          />
        ))}
      </div>
    )
  }
}

ThreeRelation.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  addButtonText: PropTypes.string.isRequired,
  firstOptions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.string
  })).isRequired,
  firstBlankOption: PropTypes.string,
  firstKey: PropTypes.string.isRequired,
  firstDataType: PropTypes.string,
  secondOptions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.string
  })).isRequired,
  secondBlankOption: PropTypes.string,
  secondKey: PropTypes.string.isRequired,
  secondDataType: PropTypes.string,
  idGenerator: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired
}

ThreeRelation.defaultProps = {
  firstDataType: 'string',
  secondDataType: 'string'
}

export default ThreeRelation
