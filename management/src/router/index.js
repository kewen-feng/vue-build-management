import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/components/Layout/index')
  }
]

const router = new Router({
  routes
})

export default router


