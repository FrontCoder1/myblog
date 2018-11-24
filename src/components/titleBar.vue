<template>
  <div class="blog-title">
    <h2 class="title">{{title}}<router-link to="/admin/edit" v-show="isAdmin">写博客</router-link>
    </h2>
  </div>
</template>
<script>
export default {
  props: ['title', 'isAdmin'],
  data () {
    return {}
  }
}
</script>
<style lang="scss">
  .title{
    padding: 0 10px;
    line-height: 40px;
    height: 40px;
    font-size: 18px;
    border-bottom: 1px solid #e5e5e5;
    border-left: 5px solid #333;
    color: #333;
    a{
      float: right;
      border: 1px solid #e5e5e5;
      background: black;
      color: #00A7EB;
    }
  }
</style>
