import { createRouter, createWebHistory } from 'vue-router'

import Home from '../modules/home/views/home.vue'
const login = () => import('../modules/auth/login.vue')
const Students = () => import("../modules/students/views/index.vue")
// 404
import page404 from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/Students',
      name:'Students',
      component:Students
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    // 404 
    {
      path:'/:pathMatch(.*)*',
      name:'404',
      component:page404
    }
  ]
})

export default router
