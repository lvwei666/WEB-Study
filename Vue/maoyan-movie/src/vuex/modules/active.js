const state = {
  index: '0'
}

const mutations = {
  change(state, index) {
    state.index = index
  }
}

const actions = {
  changeIndex({commit}, index) {
    commit('change', index)
  }
}

const getters = {
  index: state => state.index
}

export default {
  state,
  mutations,
  actions,
  getters
}