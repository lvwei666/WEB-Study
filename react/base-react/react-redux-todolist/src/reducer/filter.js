// ALL ACTIVE COMPLETED
export default (state = 'ALL', action) => {
  if (action.type) {
    return action.type;
  }
  return state;
}