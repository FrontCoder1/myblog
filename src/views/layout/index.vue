<template>
  <div class="body w1200 center">
    <blog-content></blog-content>
  </div>
</template>
<script>
import blogContent from 'Views/content/index'
export default {
  components: {blogContent},
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>
  .body{
    margin-top: 20px;
  }
</style>
