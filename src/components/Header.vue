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
            <router-link to="/notes" exact>Notes</router-link>
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
    <div id="menu_mobile_list">
      <div class="general_container">
        <div class="mm_container">
          <ul class="mm_list">
            <li><router-link to="/" exact>Bookstore</router-link></li>
            <li>
              <router-link to="/notes" exact>Notes</router-link>
            </li>
          </ul>
          <div id="mm_close">
            <i class="fas fa-times"></i>
          </div>
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
