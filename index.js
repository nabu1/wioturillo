const axios = require('axios')
const parseString = require('xml2js').parseString
const firebase = require("firebase")
require("firebase/firestore")

const COLLECTION_NAME = 'wioturilki'
const url = 'http://gdzieturilo.pl/s/?action=nextbikeXML&v=PL'
const config = { apiKey: "AIzaSyBdFBbhzU2XI4Ce-HjIsyeosWaifFmR2kc", projectId: "firestoras" }

firebase.initializeApp(config)
const app = firebase.app()
const db = firebase.firestore()

module.exports = async (request, response) => {
  await axios.get(url)
  .then(res => {
    parseString(res.data, (err, result) => {
      if (err) console.log('Erorek: ', err)

      const city = result.markers.country[0].city[0].place

      let stations = city
        .filter (el => el.$.name === 'Wałbrzyska - Wróbla' || el.$.name === 'Metro Służew')  // zakomentuj tą linię, by ściągać wszystkie stacje
        .map(el => {
              return {
                name: el.$.name,
                bikes: el.$.bikes,
                number: el.$.number
              }
          })

        stations = JSON.stringify(stations)

        const _timestamp = Date.now()
        let _time = new Date().toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" });
        _time = new Date(_time).toLocaleString()

        const stationsWithTimestamp = { _time, _timestamp, stations }

        db.collection(COLLECTION_NAME).add(stationsWithTimestamp)
          .then(doc => console.log("Document written with ID: ", doc.id))
          .catch(err => console.error("Error adding document: ", err))

        response.end(JSON.stringify(stationsWithTimestamp))
        // response.end(stations.length + '')
      })
  })
  .catch(err => {
    response.end('Erroras: ' + err)
  })
}
