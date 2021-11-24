import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes'
import vuex from './store'


import './assets/overwrite.css'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuex
}).$mount('#app')
