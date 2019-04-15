const firebase = require("firebase")
// require("firebase/firestore")

const url = 'http://gdzieturilo.pl/s/?action=nextbikeXML&v=PL'
const config = { apiKey: "AIzaSyBdFBbhzU2XI4Ce-HjIsyeosWaifFmR2kc", projectId: "firestoras" }

firebase.initializeApp(config)
const db = firebase.firestore()

const collection = async () => {
  try {
    const collection = await firebase.firestore().collection('ziutki')
    // const query = collection.where('age', '==', 11 ).orderBy('age', 'desc').limit(2)
    const query = collection.orderBy('age', 'asc')

    const result = await query.get()
    const final = result.docs.map(doc => doc.data())

    console.log(final.map(el => {
      return {
        name: el.name,
        age: el.age
      }
    }))
  }
  catch (err) {
    console.log('Erroras: ' + err)
  }
}

collection()
