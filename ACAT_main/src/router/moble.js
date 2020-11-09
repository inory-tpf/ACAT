//此处填入移动端路
import Home from '../components/mobile/home.vue'
import Swiper from '../components/mobile/swiper.vue'
import Know from '../components/mobile/know.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/mobile/home.vue'),
    redirect: '/swiper',
    children: [
      {
        path: '/swiper',
        name: 'swiper',
        component: () => import('../components/mobile/swiper.vue'),
      },
      {
        path: '/know',
        name: 'know',
        component: () => import('../components/mobile/know.vue'),
      }
    ]
  }
]