// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'moment'
import Datepicker from 'hsy-vue-datepicker'
import Tree from 'hsy-vue-tree'

Vue.use(Datepicker)
Vue.use(Tree)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
