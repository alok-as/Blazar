import Vue from 'vue'
import Vuex from 'vuex'
import database from '../firebase/firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogin: false,
    search: {
      category: '',
      location: '',
      validSearch: false,
      categories: ['Beauty', 'Fitness', 'Finances', 'Health', 'Plants & Deco'],
      locations: ['Delhi', 'Mumbai', 'Kolkata', 'Pune']
    },
    results: []
  },
  getters: {
    showLogin: state => {
      return state.showLogin
    },
    getCategory: state => state.search.category,
    getLocation: state => state.search.location,
    getCategories: state => state.search.categories,
    getLocations: state => state.search.locations,
    resultsArr: state => {
      state.results = JSON.parse(localStorage.getItem('results'))
      return state.results
    },
    validSearch: (state, getters) => {
      if (state.search.categories.includes(getters.getCategory) && state.search.locations.includes(getters.getLocation) ){
        return !state.search.validSearch
      }
      return state.search.validSearch
    }
  },
  mutations: {
    openLogin: state => {
      state.showLogin = true
    },
    closeLogin: state => {
      state.showLogin = false
    },
    setCategory: (state, newCategory) => {
      state.search.category = newCategory
    },
    setLocation: (state, newLocation) => {
      state.search.location = newLocation
    },
    persistResults: (state, results) => {
      localStorage.setItem('results', JSON.stringify(results))
    }
  },
  actions: {
    openLogin: ({ commit }) => {
      commit('openLogin')
    },
    closeLogin: ({ commit }) => {
      commit('closeLogin')
    },
    fetchResults: ({ commit, state }) => {
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
  }
})
