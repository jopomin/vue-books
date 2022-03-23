<template>
  <div class="book_card">
    <div class="book_base">
      <div class="book_pic">
        <img :src="cover" :alt="title" />
      </div>
      <div class="book_text">
        <div class="book_title">
          <h2>{{ title | truncate(25, '...') }}</h2>
        </div>
        <div class="book_author">
          <p>{{ author }}</p>
        </div>
        <div class="book_details_cta">
          <router-link :to="'/' + id"><p>Details</p></router-link>
        </div>
      </div>
    </div>
    <div class="book_tag">
      <div class="book_tag_number">
        <p>#{{ id }}</p>
      </div>
      <div class="book_tag_triangle"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Book',
  props: [
    'cover',
    'title',
    'author',
    'country',
    'description',
    'year',
    'pages',
    'lang',
    'id',
  ],
  data() {
    return {
      hover: false,
    }
  },
  filters: {
    truncate: function (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    },
  },
}
</script>
