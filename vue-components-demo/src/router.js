import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import(/* webpackChunkName: "detail" */ './views/detail/index.vue')
    },
    {
      path: '/comp',
      name: 'comp',
      component: () => import(/* webpackChunkName: "detail" */ './views/ClassComp.vue')
    },
    {
      path: '/hcomp',
      name: 'hcomp',
      component: () => import(/* webpackChunkName: "detail" */ './views/HocComp.vue')
    }
  ]
})
