// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import About from './components/About.vue';
import App from './App.vue';

const routes = [
  { path: '/', component: App },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
