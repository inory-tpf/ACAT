//此处填入移动端路
import Home from '../components/mobile/home.vue'
import Swiper from '../components/mobile/swiper.vue'
import Know from '../components/mobile/know.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/swiper',
    children: [
      {
        path: '/swiper',
        name: 'swiper',
        component: Swiper
      },
      {
        path: '/know',
        name: 'know',
        component: Know
      }
    ]
  }
]

