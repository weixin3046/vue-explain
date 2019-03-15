import Vue from 'vue'
import Router from 'vue-router'
import HomeCtrl from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeCtrl
    }
  ]
})
