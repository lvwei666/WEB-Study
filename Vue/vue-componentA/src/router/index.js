import Vue from 'vue'
import Router from 'vue-router'
import Display from '@/view/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Display',
      component: Display
    }
  ]
})
