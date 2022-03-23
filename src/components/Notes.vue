<template>
  <div id="notes">
    <div class="view_container">
      <div class="view_info">
        <h2 class="view_title">Notes</h2>
        <p class="view_description">Marea Books</p>
      </div>
      <div class="doc_content">
        <div class="doc_pic">
          <img src="../assets/img/logo_mb_te.png" alt="book.title" />
        </div>
        <div class="doc_info">
          <div class="doc_info_text">
            <p>
              'Marea Books' is a project created with Node.js, Vue.js, with the
              support of Vue-Router, Axios and Sass. It aims to print the
              results of two API calls, one to get the complete list of books,
              the other for the details of each. The navigation menu allows you
              to switch between views without refreshing. By clicking on
              'Details', a specific call is made using the id.
            </p>
            <p>
              The fully responsive and mobile-first project was created by
              Giovanni Porcelli for
              <strong
                ><a href="https://cdshotels.it/" target="_blank"
                  >CDS Hotels</a
                ></strong
              >
            </p>
            <p>
              <strong>Dependencies to be installed:</strong> express, axios,
              vue-router, sass
            </p>
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
  name: 'notes',
}
</script>
