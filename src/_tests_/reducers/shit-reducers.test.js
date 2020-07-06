import shirtReducer from "../../reducers/shirt-reducers";

describe('shirtReducer', () => {

  test('should return default state if there is no action type passed into the reducer', () => {
    expect(shirtReducer({}, { type: null })).toEqual({})
  })
})

describe('shirtReducer', () => {

  const shirtData = {
    tshirt: 'Ryan & Aimen',
    desc: '4b',
    img: 'image.png',
    price: 5,
    quantity: 2,
    id: 1
  };
  const action = { type: "ADD_TSHIRT", ...shirtData }
  test('should return state with added tshirt', () => {
    const { tshirt, price, img, desc, size, quantity, id } = shirtData
    expect(shirtReducer({}, action)).toEqual({
      [id]: { tshirt, price, img, desc, size, quantity, id }
    })
  })
})

describe('shirtReducer', () => {

  const shirtData = {
    1: {
      tshirt: 'Ryan & Aimen',
      desc: '4b',
      img: 'image.png',
      price: 5,
      quantity: 2,
      id: 1
    }
  };
  const action = { type: "DELETE_TSHIRT", id: 1 }
  test('should successfully delete a tshirt', () => {
    expect(shirtReducer(shirtData, action)).toEqual({})
  })
})

describe('shirtReducer', () => {

  const shirtData = {
    1: {
      tshirt: 'Ryan & Aimen',
      desc: '4b',
      img: 'image.png',
      price: 5,
      quantity: 2,
      id: 1
    }
  };
  const action = { type: "BUY", id: 1 }
  test('should successfully buy a tshirt', () => {
    expect(shirtReducer(shirtData, action)).toEqual({
      1: {
        tshirt: 'Ryan & Aimen',
        desc: '4b',
        img: 'image.png',
        price: 5,
        quantity: 1,
        id: 1
      }
    })
  })
})

describe('shirtReducer', () => {

  const shirtData = {
    1: {
      tshirt: 'Ryan & Aimen',
      desc: '4b',
      img: 'image.png',
      price: 5,
      quantity: 2,
      id: 1
    }
  };
  const action = { type: "STOCK", id: 1 }
  test('should successfully Stock a tshirt', () => {
    expect(shirtReducer(shirtData, action)).toEqual({
      1: {
        tshirt: 'Ryan & Aimen',
        desc: '4b',
        img: 'image.png',
        price: 5,
        quantity: 12,
        id: 1
      }
    })
  })
})
