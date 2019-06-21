import Vue from 'vue';
import Vuex from 'vuex';
// 启用应用状态管理
Vue.use(Vuex);
// 全局共享状态  // CEO
const state = {
  count: 0
}
// 组件里的computed
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
// 中央，
// state 要改，actions（上报） 是交给你调用的，increment
// 不能直接修改state.count, state.count++ mutations
// 只有actions 才可以触发同mutaions改变，
// 只有mutations 才可以修改state
// 直接修改状态
const mutations = {// 改变 唯一可以修改状态
  // 财务
  increment (state) {
    state.count++;
  },
  decrement (state) {
    state.count--;
  }
}
// 动作 部门 不能修改 state
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  // actions 里不可以修改state,可以读
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync ({ commit }) {
    // actions axios 异步取数据....
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      },2000)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})