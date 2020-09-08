import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueTypedJs from 'vue-typed-js'
import vuetify from './plugins/vuetify';

Vue.use(VueTypedJs);

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
