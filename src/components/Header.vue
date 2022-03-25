<template>
  <header>
    <div class="general_container">
      <div class="header_container">
        <a class="header_logo">
          <router-link to="/" exact>
            <img src="../assets/img/logo_mb_long_wh.png" alt="" />
          </router-link>
        </a>
        <ul class="header_menu">
          <li><router-link to="/" exact>BookStore</router-link></li>
          <li>
            <router-link to="/about" exact>About</router-link>
          </li>
          <li>
            <router-link to="/specs" exact>Specs</router-link>
          </li>
        </ul>
        <div class="header_mobile_logo">
          <router-link to="/" exact>
            <img src="../assets/img/logo_mb_wh.png" alt="Logo MB" />
          </router-link>
        </div>
        <div id="header_mobile_burger">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
}
</script>
