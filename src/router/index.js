import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Login from '@/components/user/Login'
import Users from '@/components/user/Users'
import UserInfo from '@/components/user/UserInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        {
          path: '/Users',
          name: 'Users',
          component: Users
        },
        {
          path: '/UserInfo',
          name: 'UserInfo',
          component: UserInfo
        }
      ]
    }
  ]
})
