import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/IndexView.vue'
import ContactPage from '@/views/ContactView.vue'
import OurPricing from '@/views/OurPricing.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: OurPricing
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
