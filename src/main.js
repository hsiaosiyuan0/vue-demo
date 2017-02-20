// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import routes from './routes'

import 'moment'
import Datepicker from 'hsy-vue-datepicker'
import Tree from 'hsy-vue-tree'
import Dialog from 'hsy-vue-dialog'

Vue.use(Datepicker)
Vue.use(Tree)
Vue.use(Dialog)

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
