const axios = require('axios')
const parseString = require('xml2js').parseString
import { CONSTANTS } from '../data/constants'

const COLLECTION_NAME = 'wioturillo'
const STATIONS_LIST = 'wioturillo-lista'
const urlGdzieturilo = 'http://gdzieturilo.pl/s/?action=nextbikeXML&v=PL'
const urlWioturillo = `https://api.mlab.com/api/1/databases/${COLLECTION_NAME}/collections/${COLLECTION_NAME}?apiKey=XRr-4BkluC11FFgtbOnUhzUlodvp8RfI`
const urlWioturilloLista = `https://api.mlab.com/api/1/databases/${COLLECTION_NAME}/collections/${STATIONS_LIST}?apiKey=XRr-4BkluC11FFgtbOnUhzUlodvp8RfI&u=true`

module.exports = async (request, response) => {
// const wetu = async (request, response) => {
  // await axios.get(urlGdzieturilo)
  await axios.get(CONSTANTS.GDZIETURILO)
    .then(res => {
      parseString(res.data, (err, result) => {
        if (err) console.log('Erorek: ', err)

        const now = new Date()
        const timestamp = now.getTime()
        let time = now.toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" })
        time = new Date(time).toLocaleString()
        const hour = now.getHours() + 1
        const minute = now.getMinutes()

        console.log('Time: ', time)
        console.log('Hour: ', hour)
        console.log('Minute: ', minute)

        const city = result.markers.country[0].city[0].place

        let stations = city
          // .filter (el => el.$.name === 'Wałbrzyska - Wróbla' || el.$.name === 'Metro Służew' || el.$.name === 'Miodowa')  // zakomentuj tą linię, by ściągać wszystkie stacje
          .map(el => {
            return {
              name: el.$.name,
              bikes: el.$.bikes,
              number: el.$.number,
              time,
              timestamp
            }
          })

        const list = city.map(el => el.$.name).sort()

        axios.post(urlWioturillo, stations)
          .then(res => console.log(stations))
          .catch(err => console.log('Błąd zapisu stacji na mLabie :( : ', err))

        // if(hour === 23 && minute < 59) {
          axios.put(urlWioturilloLista, { time, list })
            .then(res => console.log(list))
            .catch(err => console.log('Błąd zapisu listy stacji na mLabie :( : ', err))
        // }

        response.end('Zapisałem stacje i listę stacji na mLabie :)')
        // console.log('Zapisałem stacje i listę stacji na mLabie :)')
      })
    })
    .catch(err => {
      response.end('Erroras: ' + err)
      // console.log('Erroras: ' + err)
    })
}

// wetu()
