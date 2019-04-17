const axios = require('axios')

const COLLECTION_NAME = 'wioturillo'
const STATIONS_LIST = 'wioturillo-lista'

const urlPrefix = `https://api.mlab.com/api/1/databases/${COLLECTION_NAME}/collections/${COLLECTION_NAME}?`
const urlSufix = `apiKey=XRr-4BkluC11FFgtbOnUhzUlodvp8RfI`
const urlLista = `https://api.mlab.com/api/1/databases/${COLLECTION_NAME}/collections/${STATIONS_LIST}?`+ urlSufix

export const ajaxFindStation = async (context, station) => {
  // const station1 = 'Miodowa'
  // const station2 = 'Wałbrzyska - Wróbla'
  // const station3 = 'Metro Służew'

  console.log('%c station = ' + station, 'color: yellow')

  const stationString = encodeURIComponent(`'${station}'`)
  const query = `q={'name': ${stationString}}`

  const url = urlPrefix + query + '&' + urlSufix
  console.log(url)

  axios.get(url)
    .then((res) => {
      console.log(res.data)
      context.commit('FIND_STATION', res.data)
    })
    .catch(err => console.log('Eror: ', err))
}

export const ajaxAddStationsNames = async (context) => {
  console.log(urlLista)

  axios.get(urlLista)
    .then((res) => {
      // console.log(res.data[0].list)
      context.commit('ADD_STATIONS_NAMES', res.data[0].list)
    })
    .catch(err => console.log('Eror: ', err))
}


