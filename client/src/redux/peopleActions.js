export const setPeople = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/people")
    .then(r => r.json())
    .then(people => dispatch({type: "SET_PEOPLE", payload: people}))
  }
}

// addPerson
export const addPerson = (person) => {
  return (dispatch) => {
    fetch("http://localhost:3000/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(person)
    })
    .then(r => r.json())
    .then(person => dispatch({type: "ADD_PERSON", payload: person}))
  }
}

// deletePerson
export const deletePerson = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/people/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(personId => dispatch({type: "DELETE_PERSON", payload: personId}))
  }
}

// editPerson
export const editPerson = (person) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/people/${person.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({name: person.name})
    })
    .then(r => r.json())
    .then(p => dispatch({type: "EDIT_PERSON", payload: p}))
  }
}