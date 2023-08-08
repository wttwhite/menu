const routes = [
  // {
  //   path: '/',
  //   redirect: '/menu',
  // },
  {
    path: '/menuPage',
    name: 'menuPage',
    component: () => import('@/page/menuPage'),
    meta: {
      title: '菜单',
      isMenu: true,
    },
  },
  {
    path: '/menu',
    name: 'menuCom',
    component: () => import('@/page/menuFirst/menuCom'),
    meta: {
      title: 'menu',
      isMenu: true,
    },
  },
]

export default routes
