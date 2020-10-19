import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import dashboard from '@/views/dashboard'
import upstream from '@/views/upstream'
import vhost from '@/views/vhost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          component: dashboard,
          meta: []
        },
        {
          path: '/dashboard',
          component: dashboard
        },
        {
          path: '/upstream',
          component: upstream
        },
        {
          path: '/vhost',
          component: vhost
        }
      ]
    }
  ]
})
