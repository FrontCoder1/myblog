<template>
  <div class="content clearbox">
    <new-blog class="w80 float-left par20"></new-blog>
    <like-blog class="w20 float-right"></like-blog>
  </div>
</template>
<script>
import newBlog from './newBlog/index.vue'
import likeBlog from './likeBlog/index.vue'
export default {
  components: {newBlog, likeBlog},
  data () {
    return {}
  }
}
</script>
<style lang="scss">
  .content{
    height: 200px;
    .w80{
      box-sizing: border-box;
      width: 80%;
    }
    .w20{
      box-sizing: border-box;
      width: 20%;
    }
  }
</style>
