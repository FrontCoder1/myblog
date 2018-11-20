<template>
  <div class="content clearbox">
    <new-blog class="w80 par20" :isAdmin="isAdmin"></new-blog>
  </div>
</template>
<script>
import newBlog from 'Views/content/newBlog/index.vue'
export default {
  components: {newBlog},
  data () {
    return {
      isAdmin: true
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
  .content{
    height: 200px;
    .w80{
      box-sizing: border-box;
      width: 80%;
      margin: 0 auto;
    }
  }
</style>
