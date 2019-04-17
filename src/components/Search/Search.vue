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
      console.log('watch: findStation = ', station)  // todo zamiast ściągnąć z fajerka, bierze allstations w ktorym są tylko Wróble
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


