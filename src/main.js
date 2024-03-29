import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

import App from './App.vue'
import routes from './routes'
import store from './store/store'

Vue.use(VueChartkick, {adapter: Chart})
Vue.use(Vuetify)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
