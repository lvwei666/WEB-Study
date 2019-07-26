import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/components/Film'
import Cinemas from '@/components/Cinemas'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import Which from '@/components/Which'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Film',
      component: Film
    },
    {
      path: '/film',
      name: 'Film',
      component: Film
    },
    {
      path: '/cinemas',
      name: 'Cinemas',
      component: Cinemas
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/which/:id',
      name: 'Which',
      component: Which
    }
  ]
})
