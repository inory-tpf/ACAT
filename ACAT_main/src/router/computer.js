//此处为网页端路由
export default[
    {
      path: '/',
      name: 'page',
      component:  () => import ('../components/computer/1MainPage/page.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import ('../components/computer/2OurHistory/page.vue') 
    },
    {
      path: '/group',
      name: 'group',
      component: () => import ('../components/computer/3Group/page.vue')
    }
 
]
