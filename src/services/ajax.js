const firebase = require('firebase/app')
require('firebase/firestore')

const url = 'http://gdzieturilo.pl/s/?action=nextbikeXML&v=PL'
const config = { apiKey: "AIzaSyBdFBbhzU2XI4Ce-HjIsyeosWaifFmR2kc", projectId: "firestoras" }

firebase.initializeApp(config)
const db = firebase.firestore()

export const ajaxAddStations = async (context) => {
  const stationsQuery = await firebase.firestore().collection('wioturilki').get()
  const stations = stationsQuery.docs.map(doc => doc.data())

  // console.log(JSON.stringify(stations))

  context.commit('ADD_STATIONS', stations)
}

export const ajaxAddStationsNames = async (context) => {
  const stationsNamesQuery = await firebase.firestore().collection('wioturilki-list').get()
  const stationsNames = stationsNamesQuery.docs.map(doc => doc.data())

  // console.log(stationsNames[0].list)
  context.commit('ADD_STATIONS_NAMES', stationsNames[0].list)
}


