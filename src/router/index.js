import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  // Add other routes here
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
