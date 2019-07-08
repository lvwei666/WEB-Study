import { combineReducers } from 'redux';

const initState = {
  index: "0"
}

function index(index = initState.index, action) {
  switch (action.type) {
    case 'CHANGE':
      return action.index;
    default:
      return index;
  }
}

export default combineReducers ({
  index
})

