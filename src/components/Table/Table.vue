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
      const arr = []

      const x = this.$store.getters.getStations
      const a = x.map(el => el.stations)

      a.map(el => {
        el.map(el => {
          console.log(el)
          arr.push(el)
        })
      })

      console.log(arr)
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
</style>
