import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from 'Views/layout/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout
    }
  ]
})
