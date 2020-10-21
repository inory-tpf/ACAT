//此处为网页端路由
export default[
    {
      path: '/',
      name: 'page',
      component:  () => import ('../components/computer/1MainPage/page1.vue'),
      meta:{index:0},
    },
    {
      path: '/history',
      name: 'history',
      component: () => import ('../components/computer/2OurHistory/page2.vue'),
      meta:{index:1},
    },
    {
      path: '/group',
      name: 'group',
      component: () => import ('../components/computer/3Group/page3.vue'),
      meta:{index:2},
    }
 
]
