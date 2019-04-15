<template src="./Table.html"></template>

<script>
import StationModal from './StationModal/StationModal'

export default {
  data: () => ({
    headers: [
      { text: 'timestamp', sortable: true, value: 'timestamp' },
      // { text: 'number', sortable: true, value: 'number' },
      { text: 'name', sortable: true, value: 'name' },
      { text: 'time', sortable: true, value: 'time' },
      { text: 'bikes', sortable: false, value: 'bikes' }
    ],
    chart: {
      '2017-05-13': 2,
      '2017-05-14': 5,
      '2017-05-15': 2,
      '2017-05-16': 8
    }
  }),

  components: {
    StationModal
  },

  computed: {
    stations() {
      return this.$store.getters.getStations
    },
  },

  created() {
    this.$store.dispatch('addStations')
    this.$store.dispatch('addStationsNames')
  },

  methods: {

  },
}
</script>

<style scoped>
  #table {
    background: #46494c;
  }
</style>
