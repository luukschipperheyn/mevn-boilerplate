// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Toasted from 'vue-toasted'

window.baseURL = process.env.NODE_ENV === 'production' ? 'http://production-url' : 'http://localhost:8081'

Vue.use(Toasted, { duration: 2000 })

Vue.use({
  install () {
    Object.defineProperty(Vue.prototype, '$baseUrl', {
      get () { return window.baseURL }
    })
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
