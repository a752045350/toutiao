import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/styles/index.less'

import Vant from 'vant'
import 'vant/lib/index.css'

import 'amfe-flexible'

Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
