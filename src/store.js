import Vue from 'vue'
import Vuex from 'vuex'
import { ajaxFindStation, ajaxAddStationsNames } from './services/ajax'
import { findStation } from './services/helper'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    station: [],
    stationsNames: [],
    chartPoints: {}
  },
  getters: {
    getStations(state) {
      return state.station
    },
    getStationsNames(state) {
      return state.stationsNames
    },
    getChartPoints(state) {
      return state.chartPoints
    },
  },
  mutations: {
    FIND_STATION(state, station) {
      state.station = station
    },
    ADD_STATIONS_NAMES(state, stationsNames) {
      state.stationsNames = stationsNames
    },
    ADD_CHART_POINTS(state, chartPoints) {
      state.chartPoints = chartPoints
    }
  },
  actions: {
    addStationsNames(context) {
      ajaxAddStationsNames(context)
    },

    findStation(context, station) {
      console.log('Tu: findStation')
      ajaxFindStation(context, station)
    },
  }

})
