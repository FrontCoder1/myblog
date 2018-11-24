<template>
  <div class="clearbox">
    <title-bar title="阅读排行"></title-bar>
    <like-item></like-item>
  </div>
</template>
<script>
import titleBar from 'Components/titleBar.vue'
import likeItem from './components/likeItem.vue'
export default {
  components: { titleBar, likeItem },
  data () {
    return {}
  }
}
</script>
<style>
</style>
