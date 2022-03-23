<template>
  <div id="app">
    <Header />
    <main>
      <div class="general_container">
        <div class="main_container">
          <router-view>
            <BookStore />
            <Notes />
          </router-view>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import BookStore from './components/BookStore.vue'
import Notes from './components/Notes.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    BookStore,
    Notes,
  },
}
</script>
<style lang="scss">
@import './assets/scss/app.scss';
</style>
