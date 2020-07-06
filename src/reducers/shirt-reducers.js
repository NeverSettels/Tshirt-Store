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
      return Object.assign({}, state, {
        [id]: { ...bought, quantity: bought.quantity - 1 }
      })

    case "STOCK":
      const stockState = { ...state }
      const stocked = stockState[id]
      return Object.assign({}, state, {
        [id]: { ...stocked, quantity: parseInt(stocked.quantity) + 10 }
      })

    default:
      return state;
  }
}