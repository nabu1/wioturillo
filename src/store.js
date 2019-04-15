import Vue from 'vue'
import Vuex from 'vuex'
import { ajaxAddStations, ajaxAddStationsNames } from './services/ajax'
import { findStation } from './services/helper'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stations: [],
    stationsNames: [],
    chartPoints: {}
  },
  getters: {
    getStations(state) {
      return state.stations
    },
    getStationsNames(state) {
      return state.stationsNames
    },
    getChartPoints(state) {
      return state.chartPoints
    },
  },
  mutations: {
    ADD_STATIONS(state, stations) {
      state.stations = stations
    },
    ADD_STATIONS_NAMES(state, stationsNames) {
      state.stationsNames = stationsNames
    },
    ADD_CHART_POINTS(state, chartPoints) {
      state.chartPoints = chartPoints
    }
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
