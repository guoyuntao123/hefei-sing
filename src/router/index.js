import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main/main'
import Login from '@/views/login/login'
import Register from '@/views/login/register'
import Guitar from '@/views/guitar/guitar'
import Singer from '@/views/singer/singer'
import singerDesc from '@/views/singer/singerDesc'
import Course from '@/views/course/course'
import Comment from '@/views/comment/comment'
import Shopping from '@/views/shopping/shopping'
import Help from '@/views/help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/index',
      component: Main
    },
    {
      path: '/main',
      component: Main
    },{
      path: '/guitar',
      component: Guitar
    },{
      path: '/singer',
      component: Singer
    },{
      path:'/course',
      component:Course
    },{
      path:'/comment',
      component:Comment
    },{
      path:'/shopping',
      component:Shopping
    },{
      path:'/help',
      component:Help
    },{
      path:'/login',
      component:Login
    },{
      path:'/register',
      component:Register
    },{
      path:'/singer-desc/:id',
      component:singerDesc,
      name: 'singer-desc'
    }
  ]
})
