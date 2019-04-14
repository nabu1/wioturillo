const firebase = require('firebase/app')
require('firebase/firestore')

const url = 'http://gdzieturilo.pl/s/?action=nextbikeXML&v=PL'
const config = { apiKey: "AIzaSyBdFBbhzU2XI4Ce-HjIsyeosWaifFmR2kc", projectId: "firestoras" }

firebase.initializeApp(config)
const db = firebase.firestore()
const collection = db.collection('sledz')

export const ajaxAddStations = async (context) => {
  // const getCollection = async () => {
    const stations = await firebase.firestore().collection('wioturilki')
    const query = stations.orderBy('_timestamp', 'asc').limit(3)

    const result = await query.get()
    const final = result.docs.map(doc => doc.data())

    console.log(final)
    return final
  // }
  // getCollection()
}


