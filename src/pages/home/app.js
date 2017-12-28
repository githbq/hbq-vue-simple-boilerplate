import Vue from 'vue'
import App from './app.vue'
Vue.use(require('./common/plugin'))

export const v = new Vue({
  el: '#app',
  render: h => h(App)
})
