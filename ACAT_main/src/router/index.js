import Vue from 'vue'
import Router from 'vue-router'
import index1 from './moble'
import index2 from './computer'

Vue.use(Router)

var res = window.innerWidth
var routes = []
if (res < 786) {
  routes = index1
} else {
  routes = index2
}



export default new Router({
  routes
})
