import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Buefy from 'buefy'
import router from './router'
import store from './store'

Vue.use(Buefy, { defaultIconPack: 'fas' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
