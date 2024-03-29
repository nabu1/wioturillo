export const chartPoints = (context, stationArray) => {
  const chartPoints = {}

  stationArray.sort ((a, b) => b.timestamp - a.timestamp)
  // console.log('%c stationArray = ' + JSON.stringify(stationArray), 'color: orange')

  stationArray.map(el => {
    const time = el.time.slice(-8, -3)
    // console.log(el.time.slice(-8, -3))
    chartPoints[time] = +el.bikes
  })

  // console.log(chartPoints)

  context.commit('ADD_CHART_POINTS', chartPoints)
}

