import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from 'Views/layout/index.vue'
import aboutMe from 'Views/content/aboutMe/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Layout
    },
    {
      path: '/aboutMe',
      component: aboutMe
    }
  ]
})
