import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

const routes = [
  // 登录页
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login')
  },

  // 业务页
  {
    path: '/',
    name: 'layout',
    component: () => import('@/components/Layout'),
    redirect: '/member-list',
    children: [{
      path: '/member-list',
      name: 'memberList',
      component: () => import('@/views/member/memberList')
    }, {
      path: '/member-edit',
      name: '/memeberDetail',
      component: () => import('@/views/member/memberDetail')

    }]
  }
]

const router = new Router({
  routes
})

export default router


