export default (state = false, action) => {
  console.log(state);

  switch (action.type) {
    case 'TOGGLE_FORM':
      return !state;
    default:
      return state;
  }
}