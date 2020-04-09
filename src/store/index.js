import Vue from 'vue'
import Vuex from 'vuex'
import database from '../firebase/firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogin: false,
    search: {
      category: 'Entertainment',
      location: 'All Regions'
    },
    results: []
  },
  getters: {
    showLogin: state => {
      return state.showLogin
    },
    searchCategory: state => state.search.category,
    searchLocation: state => state.search.location,
    resultsArr: state => {
      state.results = JSON.parse(localStorage.getItem('results'))
      return state.results
    }
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
    },
    persistResults: (state, results) => {
     localStorage.setItem('results',JSON.stringify(results))
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
    },
    fetchResults: ({ commit, state}) => {
      const temp = []
      database.collection('cafes').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          const item = {
            id: doc.id,
            img: doc.data().img,
            title: doc.data().title,
            tagline: doc.data().tagline,
            location: doc.data().location
          }
          console.log(item)
          temp.push(item)
        })
        commit('persistResults', temp)
      })
    }
  },
  modules: {
  }
})
