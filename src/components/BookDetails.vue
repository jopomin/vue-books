<template>
  <div id="book_details">
    <div class="view_container">
      <div class="view_info">
        <h2 class="view_title">
          {{ book.title }}
        </h2>
        <p class="view_description">Book Details</p>
      </div>
      <div class="bd_content">
        <div class="bd_pic">
          <img :src="book.imageLink" :alt="book.title" />
        </div>
        <div class="bd_info">
          <div class="bd_info_text">
            <div id="bd_author" class="bd_text_cont">
              <h3>Author:</h3>
              <p>{{ book.author }}</p>
            </div>
            <div id="bd_country" class="bd_text_cont">
              <h3>Country:</h3>
              <p>{{ book.country }}</p>
            </div>
            <div id="bd_lang" class="bd_text_cont">
              <h3>Language:</h3>
              <p>{{ book.language }}</p>
            </div>
            <div id="bd_pages" class="bd_text_cont">
              <h3>Pages:</h3>
              <p>{{ book.pages }}</p>
            </div>
            <div id="bd_year" class="bd_text_cont">
              <h3>Year:</h3>
              <p>{{ book.year }}</p>
            </div>
            <div id="bd_abstract" class="bd_text_cont">
              <h3>Abstract:</h3>
              <p>{{ book.abstract }}</p>
            </div>
          </div>
          <router-link to="/" exact
            ><p class="back_home">Back to BookStore</p></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookDetails',
  data() {
    return {
      id: this.$route.params.book,
      book: {},
    }
  },
  created() {
    this.axios.get(this.books_url + '/' + this.id).then((response) => {
      console.log(response.data)
      this.book = response.data
    })
  },
}
</script>
