import { combineReducers } from 'redux';
import * as Actiontype from './actionTypes';
const initialState = {
  showStatus: false,
  song: {}, // current
  songs: [],
  lists: [],
  isTrue: false
}
/**
 * {type: 'SHOW_PLAYER', showStatus: true}
 * {type: 'SHOW_PLAYER', showStatus: false}
 */
function showStatus(showStatus = initialState.showStatus, action) {
  switch (action.type) {
    case Actiontype.SHOW_PLAYER:
      return action.showStatus;
    default:
      return showStatus;
  }
} 
/**
 * {type: 'CHANGE_SONG', song: {}}
 * type
 * payload
 */
function song(song = initialState.song, action) {
  switch (action.type) {
    case Actiontype.CHANGE_SONG:
      return action.song;
    default:
      return song;
  }
}

function todo(lists = initialState.lists, action) {
  switch (action.type) {
    case 'ADD': {
      return lists.concat([action.val]);
    }
    default: 
      return lists;
  }
}

function isTrue(isTrue = initialState.isTrue, action) {
  switch (action.type) {
    case 'CHANGE': {
      return action.val2
    }
    default:
      return isTrue
  }
}
export default combineReducers({
  showStatus,
  song,
  todo,
  isTrue
})