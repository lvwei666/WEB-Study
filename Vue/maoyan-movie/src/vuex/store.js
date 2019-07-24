import Vue from 'vue';
import Vuex from 'vuex';
import active from './modules/active'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    active
  }
})