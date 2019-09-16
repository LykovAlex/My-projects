const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
    return {
      ...state,
      items: [
        ...state.items,
        action.payload
      ]
    }
    case 'DELETE_TASK':
    return {
      ...state,
      items: state.items.filter(task => task.id !== action.payload)
    }
    default:
      return state;
  }
}
