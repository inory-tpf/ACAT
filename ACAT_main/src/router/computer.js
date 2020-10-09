//此处为网页端路由
export default[
    {
      path: '/',
      name: 'HelloWorld',
      component:  () => import ('../components/computer/1MainPage/HelloWorld.vue'),
    }
]
