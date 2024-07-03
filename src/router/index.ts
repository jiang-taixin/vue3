import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home/HomePage.vue'
import Event from '../views/event/Event.vue'
import Compute from '../views/compute/Compute.vue'
import Props from '../views/props/Props.vue'
import Slot from '../views/slot/Slot.vue'
import LifeCircle from '../views/lifeCircle/LifeCircle.vue'
import Depdence from '../views/depdence/Depdence.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
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

  ]
})

export default router
