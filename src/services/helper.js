export const findStation = (context, station, allStations) => {
  console.log('%c station = ' + station, 'color: orange')
  // console.log(JSON.stringify(allStations))

  const arr = []

  allStations
    .map(el => el.stations)
    .map(el => el.map(el => arr.push(el)))

  console.log(arr)

  // const arr1 = arr.filter(el => el.name === 'Wałbrzyska - Wróbla')
  const arr1 = arr.filter(el => el.name === station)

  console.log(arr1)

  // context.commit('ADD_STATIONS', selectedStation)
  context.commit('ADD_STATIONS', arr1)
}

