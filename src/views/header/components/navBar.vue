<template>
  <nav class="w1200 center">
    <h1 class="logo float-left">
      {{user}}的博客
    </h1>
    <ul class="nav-content float-left">
      <li v-for="(value, key) in router" :key="key">
        <router-link :to=value.path>{{value.title}}</router-link>
      </li>
    </ul>
    <form class="search hidden">
      <input type="text">
    </form>
  </nav>
</template>
<script>
import router from 'Config/router'
export default {
  data () {
    return {
      user: '那个追逐',
      router
    }
  }
}
</script>
<style lang="scss">
  .logo{
    color: #00A7EB;
    line-height: 80px;
    font-size: 20px;
    font-weight: bold;
    margin-right: 70px;
    overflow: hidden;
  }
  .nav-content{
    li{
      line-height: 80px;
      float: left;
      a{
        padding: 0 20px;
        color: #bdbdbd;
        &:hover{
          color: #00A7EB;
        }
      }
    }
  }
  .active{
    color: #00A7EB;
  }
</style>
