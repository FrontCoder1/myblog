<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from 'Views/header/index.vue'
import Footer from 'Views/footer/index.vue'
export default {
  components: {Header, Footer},
  name: 'App'
}
</script>
<style>
@import "./assets/css/reset.css";
</style>
