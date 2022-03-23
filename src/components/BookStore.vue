<template>
  <div class="view_container bookstore_content">
    <Book
      v-for="book in books"
      :key="book.id"
      :id="book.id"
      :cover="book.imageLink"
      :title="book.title"
      :author="book.author"
      :country="book.country"
      :description="book.abstract"
      :year="book.year"
      :pages="book.pages"
      :lang="book.language"
    />
  </div>
</template>

<script>
import Book from './Book.vue'
export default {
  name: 'BookStore',
  components: {
    Book,
  },
  data() {
    return {
      books: [],
    }
  },
  mounted() {
    this.axios.get(this.books_url).then((response) => {
      this.books = response.data
      console.log(this.books)
    })
  },
}
</script>
