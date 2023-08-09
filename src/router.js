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
    path: '/menuType',
    name: 'menuType',
    component: () => import('@/page/menuType'),
    meta: {
      title: '分类',
      isMenu: true,
    },
  },
  {
    path: '/menuHistory',
    name: 'menuHistory',
    component: () => import('@/page/menuHistory'),
    meta: {
      title: '历史菜谱',
      isMenu: true,
    },
  },
]

export default routes
