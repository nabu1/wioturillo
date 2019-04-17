export const chartPoints = (context, stationArray) => {
  // console.log('%c stationArray = ' + JSON.stringify(stationArray), 'color: lime')
  const chartPoints = {}

  stationArray.map(el => {
    const time = "'" + el.time + "'"
    chartPoints[time] = +el.bikes
  })

  // console.log(chartPoints)

  context.commit('ADD_CHART_POINTS', chartPoints)
}

