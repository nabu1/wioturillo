const axios = require('axios')

const COLLECTION_NAME = 'wioturillo'
const STATIONS_LIST = 'wioturillo-lista'

const urlPrefix = `https://api.mlab.com/api/1/databases/${COLLECTION_NAME}/collections/${COLLECTION_NAME}?`
const urlSufix = `apiKey=XRr-4BkluC11FFgtbOnUhzUlodvp8RfI`

const stationName1 = 'Miodowa'
const stationName2 = 'Wałbrzyska - Wróbla'
const stationName3 = 'Metro Służew'
// const stationName4 = encodeURIComponent(`${stationName2}`)
const stationNameString = encodeURIComponent(`'${stationName3}'`)

const query = `q={'name': ${stationNameString}}`

const url = urlPrefix + query + '&' + urlSufix

// axios.get(url)
//   .then((res) => console.log(res.data))
//   .catch(err => console.log('Eror: ', err))

// console.log(url)

// const urlLista = `https://api.mlab.com/api/1/databases/${COLLECTION_NAME}/collections/${STATIONS_LIST}?`+ 'apiKey=XRr-4BkluC11FFgtbOnUhzUlodvp8RfI'
const urlLista = `https://api.mlab.com/api/1/databases/${COLLECTION_NAME}/collections/${STATIONS_LIST}?`+ urlSufix

axios.get(urlLista)
  .then((res) => console.log(res.data))
  .catch(err => console.log('Eror: ', err))

console.log(urlLista)
