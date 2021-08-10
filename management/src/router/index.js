import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/'
  }
]

const router = new Router({
  routes
})

export default router


