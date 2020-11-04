// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './computer'
import router from './router'
import moble from './moble'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'
Vue.use(VueFullpage)

Vue.config.productionTip = false

/* eslint-disable no-new */
var res = window.innerWidth
if(res < 786){
  //移动端
  new Vue({
    el: '#app',
    router,
    components: { moble },
    template: '<moble/>'
  })
  
}else{
  //电脑端
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
  
}
