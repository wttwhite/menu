import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

import ComPagination from '@/components/com-pagination'
Vue.component(ComPagination.name, ComPagination)

Vue.use(VueRouter)
Vue.use(ElementUI, {
  size: 'small',
})
Vue.prototype.$HeaderCellStyle = {
  fontFamily: 'PingFangSC-Medium, PingFang SC',
  fontWeight: '500',
  color: '#4D4D4D',
  fontSize: '14px',
  backgroundColor: '#e6e6e6',
}

const router = new VueRouter({
  base: '/',
  mode: 'hash',
  routes: routes,
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
