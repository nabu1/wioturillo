<template src="./Search.html"></template>

<script>

export default {
  data() {
    return {
      selectStation: ''
    }
  },

  computed: {
    stationsNames() {
      const stationsNames = this.$store.getters.getStationsNames
      // console.log(stationsNames)
      return stationsNames
    }
  },

  watch:{
    selectStation(station, oldStation) {
      console.log('watch: selectedStation = ', station)
      this.$store.dispatch('selectStation', station)
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


