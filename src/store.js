import Vue from 'vue'
import Vuex from 'vuex'
import { ajaxAddStations } from './services/ajax'
// import { initialColumns, totalColumn } from '../data/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stations: [],

  },
  getters: {
    getStations(state) {
      return state.stations
    },
  },
  mutations: {
    ADD_STATIONS(state, stations) {
      state.stations = stations
    },
  },
  actions: {
    addStations(context) {
      ajaxAddStations(context)
    },
  }

})
