import Vue from 'vue'
import Router from 'vue-router'
import index2 from './computer'

Vue.use(Router)

var res = window.innerWidth  
var routes = []
if(res < 786){
  
}else{
  routes = index2
}
  


export default new Router({
  mode:'history',
  routes
})
