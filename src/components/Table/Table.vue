<template src="./Table.html"></template>

<script>
import StationModal from './StationModal/StationModal'

export default {
  data: () => ({
    headers: [
      { text: 'number', sortable: true, value: 'number' },
      { text: 'name', sortable: true, value: 'name' },
      { text: 'time', sortable: true, value: 'time' },
      { text: 'bikes', sortable: false, value: 'bikes' }
    ],
  }),

  components: {
    StationModal
  },

  computed: {
    stations() {
      const arr = []
      const stations = this.$store.getters.getStations

      stations.map(el => el.stations)
              .map(el => el.map(el => arr.push(el)))

      return arr
    },
  },

  created() {
    this.$store.dispatch('addStations')
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
