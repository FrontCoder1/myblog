import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    token: ''
  },
  actions: {
    setStore ({commit, state}, data) {
      commit('setStore', data)
    }
  },
  mutations: {
    setStore (state, data) {
      state.userName = data.userName
      state.token = data.token
    }
  },
  getter: {}
})
