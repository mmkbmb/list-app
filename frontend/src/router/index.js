import { createRouter, createWebHashHistory } from 'vue-router'
import ItemsList from '../views/ItemsList.vue'

const routes = [
  {
    path: '/',
    name: 'ItemsList',
    component: ItemsList
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "new" */ '../views/New.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
      component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue')
    },
    {
      path: '/userPosts',
      name: 'userPosts',
        component: () => import(/* webpackChunkName: "userPosts" */ '../views/UserPosts.vue')
      }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
