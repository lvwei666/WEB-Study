import Vue from 'vue'
import Vuex from 'vuex'
import trip from './modules/trip'

Vue.use(Vuex)

export default new vuex.Store({
  modules: {
    trip
  }
})