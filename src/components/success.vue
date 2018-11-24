<template>
  <div class="success">
    <p>文章发布成功</p>
    <div class="btns">
      <router-link to="/">返回首页</router-link><router-link to='/admin'>返回上一页</router-link>
    </div>

  </div>
</template>
<script>
export default {
  props: ['lastLink'],
  data () {
    return {}
  }
}
</script>
<style lang="scss">
  .success{
    text-align: center;
    margin-top: 100px;
    p{
      font-size: 25px;
      color: #4F4F4F;
    }
    .btns{
      margin-top: 50px;
    }
    a{
      border: 1px solid #00A7EB;
      padding: 5px;
      color: #00A7EB;
      margin-right: 20px;
      border-radius: 3px;
    }
  }
</style>
