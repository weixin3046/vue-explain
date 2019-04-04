import Vue from 'vue'
import Router from 'vue-router'
import HomeCtrl from '@/components/home'
import LoginCtrl from '@/views/index'

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
    }
  ]
})
