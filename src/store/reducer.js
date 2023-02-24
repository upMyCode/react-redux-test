const defaultState = {
  tickets: []
}

const addTicketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TICKET":
      return {
        ...state,
        tickets: state.tickets.concat(action.ticket)
      };
    default: return state
  }
}

export default addTicketReducer;