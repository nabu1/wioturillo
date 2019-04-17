<template src="./Table.html"></template>

<script>

export default {
  data: () => ({
    headers: [
      { text: 'timestamp', sortable: true, value: 'timestamp' },
      // { text: 'number', sortable: true, value: 'number' },
      { text: 'name', sortable: true, value: 'name' },
      { text: 'time', sortable: true, value: 'time' },
      { text: 'bikes', sortable: false, value: 'bikes' }
    ],
    paginationSync: {
      descending: true
    }
  }),

  computed: {
    stations() {
      console.log(this.$store.getters.getStations)
      return this.$store.getters.getStations
    },
    chart() {
      console.log(this.$store.getters.getChartPoints)
      return this.$store.getters.getChartPoints
    },
  },

  created() {
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
