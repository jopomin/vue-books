import axios from 'axios'

const BASE_URL = 'http://localhost:3000/'

export default {
  install(Vue) {
    Vue.prototype.axios = axios
    Vue.prototype.books_url = BASE_URL + 'books'
  },
}
