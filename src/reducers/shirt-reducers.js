export default (state = {}, action) => {

  const { tshirt, price, img, desc, size, quantity, id } = action;

  switch (action.type) {
    case "ADD_TSHIRT":

      return Object.assign({}, state, {
        [id]: { tshirt, price, img, desc, size, quantity, id }
      },
      )

    case 'DELETE_TICKET':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
} 