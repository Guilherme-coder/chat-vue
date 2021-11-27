import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store'


import './assets/overwrite.css'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

let isAuthenticated = false
router.beforeEach((to, from, next) => {
  if(store.getters.getUserToken != null) isAuthenticated = true
  else isAuthenticated = false

  if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
  else next()
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
