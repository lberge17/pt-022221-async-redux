import React, { Component } from 'react';
import { addPerson } from '../../redux/peopleActions';
import { connect } from 'react-redux'

class PersonForm extends Component {
  state = {
    name: ""
  }

  handleChange = e => {
    this.setState({name: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    // dispatch addPerson
    this.props.dispatchAddPerson(this.state)
    // clear out my state
    this.setState({name: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="person-name-input">Name:</label>
        <input 
          id="person-name-input" 
          onChange={this.handleChange} 
          value={this.state.name} 
          type="text" />
        <input type="submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatchAddPerson: (person) => dispatch(addPerson(person))
  }
}

export default connect(null, mapDispatchToProps)(PersonForm)