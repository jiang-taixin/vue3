import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home/HomePage.vue'
import Event from '../views/event/Event.vue'
import Compute from '../views/compute/Compute.vue'
import Props from '../views/props/Props.vue'
import Slot from '../views/slot/Slot.vue'
import LifeCircle from '../views/lifeCircle/LifeCircle.vue'
import Depdence from '../views/depdence/Depdence.vue'
import RefReactive from '../views/ref-reactive/RefReactive.vue'
import WatchPage from '../views/watch-page/watch-page.vue'
import MyRoute from '../views/myroute/MyRoute.vue'
import MyHooks from '../views/myHooks/myHooks.vue'
import MyHome from '../views/myroute/HomePage.vue'
import MyNews from '../views/myroute/News.vue'
import MyAbout from '../views/myroute/About.vue'
import MyPinia from '@/views/my-pinia/MyPinia.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),   //路由器的工作模式
  // history模式更加美观   不带有#    后期项目上线需要服务端配合处理路径问题，否则刷新会有404错误
  // hash 模式    url不带# 兼容性好   后端不需要处理路径
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {

    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/compute',
      name: 'compute',
      component: Compute
    },
    {
      path: '/props',
      name: 'props',
      component: Props
    },
    {
      path: '/slot',
      name: 'slot',
      component: Slot
    },
    {
      path: '/life',
      name: 'life',
      component: LifeCircle
    },
    {
      path: '/depdence',
      name: 'depdence',
      component: Depdence
    },
    {
      path: '/ref-reactive',
      name: 'ref-reactive',
      component: RefReactive
    },
    {
      path: '/watch',
      name: 'watch',
      component: WatchPage
    },
    {
      path:'/my-route',
      name:'my-route',
      component:MyRoute,
      children:[
        {
          path:'home',
          name:'my-home',
          component:MyHome
        },
        {
          path:'news',
          name:'my-news',
          component:MyNews
        },
        {
          path:'about/:age',
          name:'my-about',
          component:MyAbout
        }
      ]
    },
    {
      path:'/myhooks',
      name:'myhooks',
      component:MyHooks
    },
    {
      path:'/mypinia',
      name:'mypinia',
      component:MyPinia
    }


  ]
})

export default router
