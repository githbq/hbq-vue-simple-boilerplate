import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue'

Vue.use(ElementUI)

export const v = new Vue({
  el: '#app',
  render: h => h(App)
})
