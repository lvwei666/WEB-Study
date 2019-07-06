// {}
import * as ActionType from './actionTypes';
// 创建 action
export function showPalyer(showStatus) {
  // 逻辑
  return {
    type: ActionType.SHOW_PLAYER, showStatus
  }
}
export function changeSong(song) {
  return {
    type: ActionType.CHANGE_SONG, song
  }
}
/**
 * dispatch({type: '', song: {}})
 * dispatch(changeSong(song))
 */
export function add(val) {
  return {
    type: 'ADD', val
  }
}