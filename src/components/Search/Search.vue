<template src="./Search.html"></template>

<script>

export default {
  data() {
    return {
      findStation: '',
      hours: [1, 2, 4, 8, 12, 24]
    }
  },

  computed: {
    stationsNames() {
      const stationsNames = this.$store.getters.getStationsNames
      // console.log(stationsNames)
      return stationsNames
    }
  },

  mounted() {
    if (localStorage.getItem('wioturillo')) {
      this.findStation = localStorage.getItem('wioturillo')
      this.hours = localStorage.getItem('wioturillo-hours')
    }
  },

  watch:{
    findStation(station, oldStation) {
      console.log('%c station = ' + station, 'color: yellow')
      console.log('%c this.hours = ' + this.hours, 'color: yellow')
      localStorage.setItem('wioturillo', station)
      this.$store.dispatch('findStation', { station, hours: this.hours })
    },

    hours(hours, oldHours) {
      console.log('%c this.findStation = ' + this.findStation, 'color: orange')
      console.log('%c hours = ' + hours, 'color: orange')
      localStorage.setItem('wioturillo-hours', hours)
      this.$store.dispatch('findStation', { station: this.findStation, hours })
    }
  },
}
</script>

<style scoped>
  div {
    font-family: "Roboto";
  }
</style>


