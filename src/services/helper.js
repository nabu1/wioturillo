export const findStation = (context, station, allStations) => {
  console.log('%c station = ' + station, 'color: orange')
  // console.log(JSON.stringify(allStations))

  const stationsArr = []

  allStations
    .map(el => el.stations)
    .map(el => el.map(el => stationsArr.push(el)))

  // console.log(stationsArr)

  // const arr1 = arr.filter(el => el.name === 'Wałbrzyska - Wróbla')
  const selectedStation = stationsArr.filter(el => el.name === station)

  console.log(selectedStation)
  // selectedStation.sort((a, b) => a.timestamp.localeCompare(b.timestamp))

  // context.commit('ADD_STATIONS', selectedStation)
  context.commit('ADD_STATIONS', selectedStation)
}

