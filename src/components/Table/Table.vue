<template src="./Table.html"></template>

<script>
export default {
  data: () => ({
    headers: [
      { text: 'number', sortable: true, value: 'number' },
      { text: 'name', sortable: true, value: 'name' },
      { text: 'bikes', sortable: false, value: 'bikes' }
    ],

    stations: [
      { number: '5555', name: 'Wróbla', bikes: 12 },
      { number: '6666', name: 'Metro Służewiec', bikes: 21 }
    ]
  }),

  computed: {
    devs() {
      //return this.$store.getters.readDevs
    },

    formTitle() {
      return 'Developer Data'
    },

    dialog() {
      return this.$store.getters.getOpenDialog || false
    },

    progressBar() {
      return this.$store.getters.getProgressBar
    },
  },

  created() {
    this.$store.dispatch('readDevsiaków')
  },

  methods: {
    
  },
}
</script>

<style scoped>
</style>
