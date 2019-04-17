const CONSTANTS = {
  MLAB: 'https://api.mlab.com/api/1/databases/',
  COLLECTION_NAME: 'wioturillo',
  STATIONS_LIST: 'wioturillo-lista',
  API_KEY: 'apiKey=XRr-4BkluC11FFgtbOnUhzUlodvp8RfI',

  GDZIETURILO: 'http://gdzieturilo.pl/s/?action=nextbikeXML&v=PL'
}

CONSTANTS.MLAB_PREFIX = CONSTANTS.MLAB + CONSTANTS.COLLECTION_NAME + '/collections/' + CONSTANTS.COLLECTION_NAME + '?',

console.log(CONSTANTS)
