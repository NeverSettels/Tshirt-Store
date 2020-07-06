export default (state = {}, action) => {

  const { tshirt, price, img, desc, size, quantity, id } = action;

  switch (action.type) {
    case "ADD_TSHIRT":
      return Object.assign({}, state, {
        [id]: { tshirt, price, img, desc, size, quantity, id }
      },
      )
    case 'DELETE_TSHIRT':
      const newState = { ...state };
      delete newState[id];
      return newState;

    case "BUY":
      const buyingState = { ...state }
      const bought = buyingState[id]
      console.log(typeof parseInt(bought.quantity));
      return Object.assign({}, state, {
        [id]: { ...bought, quantity: parseInt(quantity) - 1 }
      })
    default:
      return state;
  }
}