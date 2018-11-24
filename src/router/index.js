import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from 'Views/layout/index.vue'
import AboutMe from 'Views/content/aboutMe/index.vue'
import Admin from 'Views/content/admin/index.vue'
import Edit from 'Components/edit'
import ArticleDetail from 'Components/articleDetail'
import Success from 'Components/success'
import Login from 'Views/content/login/index.vue'
import utils from 'Config/utils'
import Quest404 from 'Components/quest-404'

Vue.use(Router)

let router = new Router({
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
      meta: { requiresAuth: true },
      component: Admin
    },
    {
      path: '/admin/edit',
      meta: { requiresAuth: true },
      component: Edit
    },
    {
      path: '/article/detail/:id',
      component: ArticleDetail
    },
    {
      path: '/article/success',
      meta: { requiresAuth: true },
      component: Success
    },
    {
      path: '/admin/login',
      component: Login
    },
    {
      path: '*',
      component: Quest404
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = utils.getStorage('token')
    if (token === null || token === '') {
      next('/admin/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
