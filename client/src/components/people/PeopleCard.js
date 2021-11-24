import React from 'react'
import { deletePerson, editPerson } from '../../redux/peopleActions'
import { connect } from 'react-redux'

function PeopleCard(props) {
  function handleDelete(){
    props.deletePerson(props.id)
  }

  function handleEdit(){
    props.editPerson({name: props.name + "!", id: props.id})
  }

  return (
    <div>
      <span>{props.name}</span>
      <button onClick={handleEdit}>!</button>
      <button onClick={handleDelete}>X</button>
    </div>
  )
}

// function mapDispatchToProps(dispatch){
//   return {
//     deletePerson: (id) => dispatch(deletePerson(id)),
//     addPerson: (person) => dispatch(addPerson(person)),
//     setPerson: () => dispatch(setPerson())
//   }
// }

export default connect(null, { deletePerson, editPerson })(PeopleCard)