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

    default:
      return state;
  }
}

export default reducer;