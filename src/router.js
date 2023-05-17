
const routes = [
    {
      path: '/',
      redirect: '/menu',
    },
    {
      path: '/menu',
      name: 'menuCom',
      component: () => import('@/page/menuFirst/menuCom'),
      meta: {
        title: 'menu',
        isMenu: true
      },
    }
  ]
  
  export default routes
  