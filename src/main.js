import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'

Vue.use(Buefy, { defaultIconPack: 'fas' })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
