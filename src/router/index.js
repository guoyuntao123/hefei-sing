import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import LogOn from '@/views/logOn'
import Register from '@/views/register'
import Guitar from '@/views/guitar'
import Ukulele from '@/views/ukulele'
import Singer from '@/views/singer'
import Course from '@/views/course'
import Comment from '@/views/comment'
import Shopping from '@/views/shopping'
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
      path: '/ukulele',
      component: Ukulele
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
      path:'/logOn',
      component:LogOn
    },{
      path:'/register',
      component:Register
    }
  ]
})
