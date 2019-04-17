const CONSTANTS = {
  GDZIETURILO: 'http://gdzieturilo.pl/s/?action=nextbikeXML&v=PL',
  
  MLAB: 'https://api.mlab.com/api/1/databases/',
  COLLECTION_NAME: 'wioturillo',
  STATIONS_LIST: 'wioturillo-lista',
  API_KEY: 'apiKey=XRr-4BkluC11FFgtbOnUhzUlodvp8RfI'
}

CONSTANTS.MLAB_PREFIX = CONSTANTS.MLAB + CONSTANTS.COLLECTION_NAME + '/collections/' + CONSTANTS.COLLECTION_NAME + '?',
CONSTANTS.MLAB_LISTA = `${CONSTANTS.MLAB}${CONSTANTS.COLLECTION_NAME}/collections/${CONSTANTS.STATIONS_LIST}?`+ CONSTANTS.API_KEY

module.exports.CONSTANTS = CONSTANTS
