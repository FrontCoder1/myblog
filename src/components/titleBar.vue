<template>
  <h2 class="title">{{title}}</h2>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {}
  }
}
</script>
<style>
  .title{
    padding: 0 10px;
    line-height: 40px;
    height: 40px;
    font-size: 18px;
    border-bottom: 1px solid #e5e5e5;
    border-left: 5px solid #333;
    color: #333
  }
</style>
