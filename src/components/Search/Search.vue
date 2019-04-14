<template src="./Search.html"></template>

<script>

export default {
  data() {
    return {
      stationNames: [
        'Metro Służew',
        'Wałbrzyska - Wróbla'
      ],
      selectStation: ''
    }
  },

  computed: {

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
</style>
