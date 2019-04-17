<template src="./Search.html"></template>

<script>

export default {
  data() {
    return {
      findStation: ''
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
    findStation(station, oldStation) {
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


