// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Kontakt from './pages/Kontakt.vue'
import SwaggerPage from './pages/Developer.vue' // NEU: Seite für Swagger oder Dev-Demo

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/kontakt', name: 'Kontakt', component: Kontakt },
  { path: '/developer ', name: 'Developer ', component: SwaggerPage } // NEU
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
