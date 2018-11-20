<template>
  <div>
    <title-bar title="最新博客"></title-bar>
    <blog-item v-for="(value, index) in article" :message="value" :key="index" :isAdmin="isAdmin"></blog-item>
  </div>
</template>
<script>
import titleBar from 'Components/titleBar.vue'
import blogItem from 'Components/blogItem/index.vue'
import server from 'Config/server'
export default {
  components: { titleBar, blogItem },
  props: [ 'isAdmin' ],
  data () {
    return {
      article: []
    }
  },
  mounted () {
    this.$http.get(server['visitor/article'])
      .then(res => {
        this.article = res.data.data
      })
  }
}
</script>
<style>
</style>
