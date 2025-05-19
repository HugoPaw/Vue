import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Kontakt from './pages/Kontakt.vue'
import SwaggerPage from './pages/Developer.vue'

export default [
  { name: 'Home', path: '/', component: Home },
  { name: 'About', path: '/about', component: About },
  { name: 'Kontakt', path: '/kontakt', component: Kontakt },
  { name: 'Swagger', path: '/swagger', component: SwaggerPage }
]
