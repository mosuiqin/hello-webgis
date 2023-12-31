import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueiClient from '@supermap/vue-iclient-mapboxgl';

import 'normalize.css'
import './style/index.css'


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueiClient);

new Vue({
  render: h => h(App),
}).$mount('#app')