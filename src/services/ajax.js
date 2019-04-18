const axios = require('axios')
import { chartPoints } from './helper'
import { CONSTANTS } from '../data/constants'

export const ajaxFindStation = async (context, stationAndHours) => {
  const stationString = encodeURIComponent(`'${stationAndHours.station}'`)
  const limit = stationAndHours.hours * 12
  const query = `q={'name': ${stationString}}&l=${limit}`
  const url = CONSTANTS.MLAB_PREFIX + query + '&' + CONSTANTS.API_KEY

  axios.get(url)
    .then((res) => {
      chartPoints(context, res.data)
      context.commit('FIND_STATION', res.data)
    })
    .catch(err => console.log('Eror: ', err))
}

export const ajaxAddStationsNames = async (context) => {
  axios.get(CONSTANTS.MLAB_LISTA)
    .then((res) => {
      context.commit('ADD_STATIONS_NAMES', res.data[0].list)
    })
    .catch(err => console.log('Eror: ', err))
}


