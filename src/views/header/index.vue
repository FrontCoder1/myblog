<template>
  <div class="header">
    <nav-bar></nav-bar>
  </div>
</template>
<script>
import navBar from './components/navBar.vue'
export default {
  components: { navBar },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
  .header{
    height: 80px;
    background: #000000;
  }
</style>
