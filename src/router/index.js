import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from 'Views/layout/index.vue'
import AboutMe from 'Views/content/aboutMe/index.vue'
import Admin from 'Views/content/admin/index.vue'
import Edit from 'Components/edit'

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
      component: AboutMe
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/admin/edit',
      component: Edit
    }
  ]
})
