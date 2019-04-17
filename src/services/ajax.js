const axios = require('axios')
import { chartPoints } from './helper'
import { CONSTANTS } from '../data/constants'

export const ajaxFindStation = async (context, station) => {

  console.log(CONSTANTS.MLAB_PREFIX)

  const stationString = encodeURIComponent(`'${station}'`)
  const query = `q={'name': ${stationString}}`
  const url = CONSTANTS.MLAB_PREFIX + query + '&' + CONSTANTS.API_KEY

  axios.get(url)
    .then((res) => {
      console.log(res.data)
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


