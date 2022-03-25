<template>
  <div id="about">
    <div class="view_container">
      <div class="view_info">
        <h2 class="view_title">About</h2>
        <p class="view_description">Marea Books Project</p>
      </div>
      <div class="doc_content">
        <div class="doc_pic">
          <img src="../assets/img/logo_mb_te.png" alt="book.title" />
        </div>
        <div class="doc_info">
          <div class="doc_info_text">
            <p>
              'Marea Books' is a fake Online BookStore. The catalog includes
              eight masterpieces written by some of the greatest writers of all
              time. By clicking on a specific button you can view the details of
              each book. The application, built with Vue.js, is totally
              responsive and 'mobile-first'.
            </p>
            <p>
              Created by Giovanni Porcelli for
              <strong
                ><a href="https://cdshotels.it/" target="_blank"
                  >CDS Hotels</a
                ></strong
              >
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
  name: 'About',
}
</script>
