import Vue from 'vue'
import Vuex from 'vuex'
import { ajaxAddStations, ajaxAddStationsNames } from './services/ajax'
import { findStation } from './services/helper'
// import { initialColumns, totalColumn } from '../data/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stations: [],
    stationsNames: []
  },
  getters: {
    getStations(state) {
      return state.stations
    },
    getStationsNames(state) {
      return state.stationsNames
    },
  },
  mutations: {
    ADD_STATIONS(state, stations) {
      // console.log('%c stations = ' + stations, 'color: yellow')
      state.stations = stations
    },
    ADD_STATIONS_NAMES(state, stationsNames) {
      console.log(stationsNames)
      // console.log('%c stations = ' + stations, 'color: yellow')
      state.stationsNames = stationsNames
    },
  },
  actions: {
    addStations(context) {
      ajaxAddStations(context)

    },
    addStationsNames(context) {
      ajaxAddStationsNames(context)
    },
    selectStation(context, station) {
      // console.log('%c addStations ' , 'color: yellow')
      findStation(context, station, this.state.stations)
    },
  }

})
