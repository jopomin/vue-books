<template>
  <div id="app">
    <Header />
    <main>
      <div class="general_container">
        <div class="main_container">
          <router-view>
            <BookStore />
            <Specs />
            <About />
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
import About from './components/About.vue'
import Specs from './components/Specs.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    BookStore,
    About,
    Specs,
  },
}
</script>
<style lang="scss">
@import './assets/scss/app.scss';
</style>
