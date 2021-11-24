import React from 'react'
import { connect } from 'react-redux'
import { setPeople } from './../../redux/peopleActions'

class PeopleContainer extends React.Component {

  componentDidMount(){
    this.props.dispatchSetPeople()
  }

  render(){
    return (
      <div>
        <h2>All People</h2>
        <div>
          {this.props.people.map(person => <p key={person.id}>{person.name}</p>)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(stateFromStore){
  return {
    people: stateFromStore.people
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatchSetPeople: () => dispatch(setPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)