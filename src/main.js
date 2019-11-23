import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import router from './router'


Vue.use(VueFullPage);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
