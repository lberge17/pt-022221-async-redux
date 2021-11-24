import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditPersonForm extends Component {
  constructor(props){
    super(props)

    let person = props.people.find(p => {
      return p.id === parseInt(props.routerProps.match.params.id)
    })

    this.state = {
      name: person ? person.name : ""
    }
  }

  // componentDidMount(){
  //   let person = props.people.find(p => {
  //     return p.id === parseInt(props.routerProps.match.params.id)
  //   })
  //   this.setState({

  //   })
  // }
  

  handleChange =(e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <form>
       <input value={this.state.name} onChange={this.handleChange} name="name" type="text"/> 
       <input type="submit"/> 
      </form>
    )
  }
}

export default connect(state => ({people: state.people}))(EditPersonForm)