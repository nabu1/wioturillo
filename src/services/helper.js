export const findStation = (context, station, allStations) => {
  console.log('%c station = ' + station, 'color: orange')
  const stationsArr = []
  const chartPoints = {}

  allStations
    .map(el => el.stations)
    .map(el => el.map(el => stationsArr.push(el)))

  const selectedStation = stationsArr.filter(el => el.name === station)
  console.log('selectedStation = ' + selectedStation)


  selectedStation.map(el => {
    // return { [el.time]: +el.bikes }
    const time = "'" + el.time + "'"
    // return { [el.time]: +el.bikes }
    chartPoints[time] = +el.bikes
  })

  // console.log(selectedStation)
  console.log(chartPoints)

  context.commit('ADD_STATIONS', selectedStation)
  context.commit('ADD_CHART_POINTS', chartPoints)
}

