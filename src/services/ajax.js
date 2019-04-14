const firebase = require('firebase/app')
require('firebase/firestore')

const url = 'http://gdzieturilo.pl/s/?action=nextbikeXML&v=PL'
const config = { apiKey: "AIzaSyBdFBbhzU2XI4Ce-HjIsyeosWaifFmR2kc", projectId: "firestoras" }

firebase.initializeApp(config)
const db = firebase.firestore()

export const ajaxAddStations = async (context) => {
  // const getCollection = async () => {
  const stationsQuery = await firebase.firestore().collection('wioturilki')
  //const query = stations.orderBy('timestamp', 'asc').limit(3)

  const stationsResult = await stationsQuery.get()
  const stations = stationsResult.docs.map(doc => doc.data())

  console.log(stations)
  context.commit('ADD_STATIONS', stations)
// }
// getCollection()
}


