import Vue from 'vue'
import Router from 'vue-router'
import HomeCtrl from '@/views/home'
import LoginCtrl from '@/views/login'
import RegisterCtrl from '@/views/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeCtrl
    },
    {
      path: '/login',
      name: 'login',
      component: LoginCtrl
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterCtrl
    }
  ]
})
