function reducer(state = {
  people: [], 
  starships: [], 
  planets: [], 
  loading: false
}, action){
  switch (action.type) {
    case "SET_PEOPLE":
      
      return {
        ...state,
        people: action.payload
      };

    case "ADD_PERSON":

      return {
        ...state,
        people: [...state.people, action.payload]
      }

    case "DELETE_PERSON":
      // {type: "DELETE_PERSON", payload: 10}
      const newPeople = state.people.filter(p => p.id !== action.payload)

      return {
        ...state,
        people: newPeople
      }

    case "EDIT_PERSON":
      // {type: "EDIT_PERSON", payload: personObj}
      // find the index of person
      const personIndex = state.people.findIndex(p => p.id === action.payload.id)

      // const updatedPeople = state.people.map(p => {
      //   if (p.id === action.payload.id){
      //     return action.payload
      //   }
      //   return p
      // })

      return {
        ...state,
        people: [
          ...state.people.slice(0, personIndex),
          action.payload,
          ...state.people.slice(personIndex + 1)
        ]
      }

    default:
      return state;
  }
}

export default reducer;
