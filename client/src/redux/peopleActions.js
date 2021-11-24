export const setPeople = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/people")
    .then(r => r.json())
    .then(people => dispatch({type: "SET_PEOPLE", payload: people}))
  }
}

// addPerson

// deletePerson

// editPerson