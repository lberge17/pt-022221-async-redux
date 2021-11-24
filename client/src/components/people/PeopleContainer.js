import React from 'react'
import { connect } from 'react-redux'
import { setPeople } from './../../redux/peopleActions'
import PeopleCard from './PeopleCard'
import PersonForm from './PersonForm'
import { Switch, Route } from 'react-router-dom'
import EditPersonForm from './EditPersonForm'

class PeopleContainer extends React.Component {

  componentDidMount(){
    this.props.dispatchSetPeople()
  }

  render(){
    return (
      <div>
        <h2>All People</h2>
        <Switch>
          <Route exact path="/people/:id/edit"component={routerProps => <EditPersonForm routerProps={routerProps} />} />
          <Route exact path="/people/new"component={routerProps => <PersonForm />} />
        </Switch>
        <div>
          {this.props.people.map(person => <PeopleCard key={person.id} {...person} />)}
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