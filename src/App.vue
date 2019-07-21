<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <header>Booker</header>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="navbar-item" v-for="link in linkMenu" :key="link.title">
        <router-link class="navbar-link" :to="`${link.url}`">{{ link.title }}</router-link>
      </li>
    </ul>
  </div>
  <router-view></router-view>
</nav>
</template>

<script>
export default {
  data() {
    return {
      linkMenu: [
        {title: 'Home', url: '/'},
        {title: 'Login', url: '/login'},
        {title: 'Calendar', url: '/calendar'},
      ]
    }
  } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  font-size: 30px;
  max-width: 1960;
  padding: 80px;
  text-align: center;
  background: #4CAF50;
  color: #FFFFFF;
}

</style>
