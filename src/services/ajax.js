const axios = require('axios')
import { chartPoints } from './helper'
import { CONSTANTS } from '../data/constants'

const urlPrefix = `${CONSTANTS.MLAB}${CONSTANTS.COLLECTION_NAME}/collections/${CONSTANTS.COLLECTION_NAME}?`
const urlLista = `${CONSTANTS.MLAB}${CONSTANTS.COLLECTION_NAME}/collections/${CONSTANTS.STATIONS_LIST}?`+ CONSTANTS.API_KEY

export const ajaxFindStation = async (context, station) => {
  const stationString = encodeURIComponent(`'${station}'`)
  const query = `q={'name': ${stationString}}`
  const url = urlPrefix + query + '&' + CONSTANTS.API_KEY

  axios.get(url)
    .then((res) => {
      console.log(res.data)
      chartPoints(context, res.data)
      context.commit('FIND_STATION', res.data)
    })
    .catch(err => console.log('Eror: ', err))
}

export const ajaxAddStationsNames = async (context) => {
  axios.get(urlLista)
    .then((res) => {
      context.commit('ADD_STATIONS_NAMES', res.data[0].list)
    })
    .catch(err => console.log('Eror: ', err))
}


