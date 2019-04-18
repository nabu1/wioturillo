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
    }
  },

  watch:{
    findStation(station, oldStation) {
      console.log('%c station = ' + station, 'color: white')
      localStorage.setItem('wioturillo', station)
      this.$store.dispatch('findStation', station)
    }
  },

  methods: {
  },
}
</script>

<style scoped>
  div {
    font-family: "Roboto";
  }
</style>


