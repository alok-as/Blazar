import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogin: false,
    search: {
      category: '',
      location: ''
    }
  },
  getters: {
    showLogin: state => {
      return state.showLogin
    },
    searchCategory: state => state.search.category,
    searchLocation: state => state.search.location
  },
  mutations: {
    openLogin: state => {
      state.showLogin = true
    },
    closeLogin: state => {
      state.showLogin = false
    },
    setCategory: (state, payload) => {
      state.search.category = payload
    },
    setLocation: (state, payload) => {
      state.search.location = payload
    }
  },
  actions: {
    openLogin: ({ commit }) => {
      commit('openLogin')
    },
    closeLogin: ({ commit }) => {
      commit('closeLogin')
    },
    setCategory: ({ commit }, payload) => {
      commit('setCategory', payload)
    },
    setLocation: ({ commit }, payload) => {
      commit('setLocation', payload)
    }
  },
  modules: {
  }
})
