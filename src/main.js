import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueTyperPlugin from 'vue-typer'

Vue.use(VueTyperPlugin);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
