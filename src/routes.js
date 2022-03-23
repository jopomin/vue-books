import BookStore from './components/BookStore.vue'
import Notes from './components/Notes.vue'
import BookDetails from './components/BookDetails.vue'

export default [
  { path: '/', component: BookStore },
  { path: '/notes', component: Notes },
  { path: '/:book', component: BookDetails },
]
