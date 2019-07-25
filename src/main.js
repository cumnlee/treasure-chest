import Vue from 'vue'

import 'normalize.css'
import './assets/css/index.css'

import App from './App.vue'
import router from './router'
import store from './store'

// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant);

import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
Vue.use(mandMobile)

import { jqueryAjax } from './assets/js/ajax'

Vue.prototype.ajax = jqueryAjax;

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
