<template src="./StationModal.html"></template>

<script>
  export default {
    data() {
      return {
        dialogm1: '',
        dialog: false,
        // stationNames: [
        //   'Metro Służew',
        //   'Wałbrzyska - Wróbla'
        // ],
        selectStation: ''
      }
    },
    computed: {
      stationsNames() {
        const stationsNames = this.$store.getters.getStationsNames
        // console.log(stationsNames)
        return stationsNames
      }
    }
  }
</script>
