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
      // return {
      //   '2019-4-15 20:56:35': 2,
      //   '2019-4-15 21:56:35': 6,
      //   '2019-4-15 22:56:35': 4,
      //   '2019-4-15 23:56:35': 8,
      // }
      console.log(this.$store.getters.getChartPoints)
      return this.$store.getters.getChartPoints
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
