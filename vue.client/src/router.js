// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Kontakt from './pages/Kontakt.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/kontakt', component: Kontakt }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
