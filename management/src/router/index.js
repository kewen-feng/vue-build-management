import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

const routes = [
  // 登录页
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login')
  },

  // 业务页
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/components/Layout'),
    redirect: '/member-list',
    children: [{
      path: '/member-list',
      name: 'MemberList',
      component: () => import('@/views/member/memberList')
    }]
  }
]

const router = new Router({
  routes
})

export default router


