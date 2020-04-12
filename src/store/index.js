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
      categories: ['Food & cafes', 'Hotels & Hostels', 'Finances', 'Health', 'Plants & Deco'],
      locations: ['Delhi', 'Mumbai', 'Kolkata', 'Pune']
    },
    results: [],
    scrollPosition: 0
  },
  getters: {
    showLogin: state => {
      return state.showLogin
    },
    getScrollPosition: state => {
      return state.scrollPosition
    },
    getCategory: state => {
      if (localStorage.getItem('category') !== null){
        state.search.category = JSON.parse(localStorage.getItem('category'))
      }
      return state.search.category
    },
    getLocation: state => {
      if (localStorage.getItem('location') !== null){
        state.search.location = JSON.parse(localStorage.getItem('location'))
      }
      return state.search.location
    },
    getCategories: state => state.search.categories,
    getLocations: state => state.search.locations,
    resultsArr: state => state.results, 
    validSearch: (state, getters) => {
      if (state.search.categories.includes(getters.getCategory) && state.search.locations.includes(getters.getLocation)) {
        return !state.search.validSearch
      }
      return state.search.validSearch
    }
  },
  mutations: {
    openLogin: state => {
      state.showLogin = true
      state.scrollPosition = window.scrollY
      console.log(window.scrollY)
    },
    closeLogin: state => {
      state.showLogin = false
    },
    setCategory: (state, newCategory) => {
      state.search.category = newCategory
      localStorage.setItem('category',JSON.stringify(newCategory))
    },
    setLocation: (state, newLocation) => {
      state.search.location = newLocation
      localStorage.setItem('location', JSON.stringify(newLocation))
    },
    getResults: (state, results) => {
      localStorage.setItem('results', JSON.stringify(results))
      state.results = results
    },
    getLocalResults: (state) => {
      if(localStorage.getItem('results') !== null) {
        state.results = JSON.parse(localStorage.getItem('results'))
      }
    }
  },
  actions: {
    closeLogin: ({ commit }) => {
      commit('closeLogin')
    },
    fetchResults: ({ commit, state }, collection) => {
      const temp = []
      database.collection(collection).get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          const item = {
            id: doc.id,
            img: doc.data().img,
            title: doc.data().title,
            tagline: doc.data().tagline,
            location: doc.data().location
          }
          temp.push(item)
        })
        console.log(temp)
        commit('getResults', temp)
      })
    }
  }
})
