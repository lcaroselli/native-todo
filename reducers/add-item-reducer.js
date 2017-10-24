export const addItemSuccess = (state='', action ) => {
  switch(action.type) {
    case 'ADD_TODO': {
      return {
        todo: action.todo
      }
    }

    default:
      return state;
  }
}
