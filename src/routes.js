import BookStore from './components/BookStore.vue'
import About from './components/About.vue'
import Specs from './components/Specs.vue'
import BookDetails from './components/BookDetails.vue'

export default [
  { path: '/', component: BookStore },
  { path: '/about', component: About },
  { path: '/specs', component: Specs },
  { path: '/:book', component: BookDetails },
]
