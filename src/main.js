import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

Vue.use(VueRouter)
Vue.use(ElementUI, {
  size: 'small',
})

const router = new VueRouter({
  base: '/',
  mode: 'hash',
  routes: routes,
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
