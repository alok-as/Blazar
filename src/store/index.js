import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogin: false
  },
  getters: {
    showLogin: state => {
      return state.showLogin
    }
  },
  mutations: {
    openLogin: state => {
      state.showLogin = true
    },
    closeLogin: state => {
      state.showLogin = false
    }
  },
  actions: {
    openLogin: ({ commit }) => {
      commit('openLogin')
    },
    closeLogin: ({ commit }) => {
      commit('closeLogin')
    }
  },
  modules: {
  }
})
