import { MemberEntity } from "../model";
import { state } from ".";

// 状态的计算，reduce 纯函数 返回当前状态
// state, 初始值
export const membersReducer = (state: MemberEntity[] = [], action) => {
  switch(action.type) {
    case 'FETCH_MEMBER_COMPLETED': return action.payload
  }
  return state;
}