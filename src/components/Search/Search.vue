<template src="./Search.html"></template>

<script>

export default {
  data() {
    return {
      stationNames: [
        'Metro Służew',
        'Wróbla'
      ],
      selectedStation: ''
    }
  },

  computed: {

  },
  watch:{
    selectedStation(val, oldval) {
      console.log('watch: selectedStation = ', val)
    }
  },

  methods: {
  },
}
</script>

<style scoped>
</style>
