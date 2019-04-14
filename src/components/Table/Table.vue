<template src="./Table.html"></template>

<script>
export default {
  data: () => ({
    headers: [
      { text: 'number', sortable: true, value: 'number' },
      { text: 'name', sortable: true, value: 'name' },
      { text: 'time', sortable: true, value: 'time' },
      { text: 'bikes', sortable: false, value: 'bikes' }
    ],
  }),

  computed: {
    stations() {
      // return [
      //   { number: '5555', name: 'Wróbla', time: '13:10', bikes: 5 },
      //   { number: '5555', name: 'Wróbla', time: '13:20', bikes: 6 },
      //   { number: '6666', name: 'Metro Służewiec', time: '13:10', bikes: 7 },
      //   { number: '6666', name: 'Metro Służewiec', time: '13:20', bikes: 8 }
      // ]

      console.log(this.$store.getters.getStations)
      const x = this.$store.getters.getStations

      const a = x.map(el => el.stations)

      return a[0]
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
</style>
