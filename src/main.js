// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Calendar from './components/calendar'
import Login from './components/auth/login'
import Book from './components/book'

Vue.component('Calendar', Calendar)
Vue.component('Login', Login)
Vue.component('Book', Book)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
