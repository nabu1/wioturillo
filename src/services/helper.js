export const findStation = (context, station, allStations) => {
  console.log('%c allStations = ',  allStations, 'color: orange')
  console.log('%c station = ' + station, 'color: lime')

  const stationsArr = []
  const chartPoints = {}

  allStations
    .map(el => el.stations)
    .map(el => el.map(el => stationsArr.push(el)))

  let selectedStation = stationsArr.filter(el => el.name === station)
  selectedStation.sort((a, b) => b.timestamp - a.timestamp)

  console.log('selectedStation = ' + JSON.stringify(selectedStation))

  selectedStation.map(el => {
    const time = "'" + el.time + "'"
    chartPoints[time] = +el.bikes
  })

  console.log(chartPoints)

  context.commit('ADD_STATIONS', selectedStation)
  context.commit('ADD_CHART_POINTS', chartPoints)
}

