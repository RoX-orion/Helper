import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout' //Layout为父路由组件，会在所有子路由上显示

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
