<template>
  <div class="likeItem">
    <h3 v-for="(value, index) in article" :key="index">
      <router-link :to= "'article/detail/'+ value._id">
        {{index+1}}.{{value.itemTitle}}
      </router-link>
    </h3>
  </div>
</template>
<script>
import server from 'Config/server'
export default {
  data () {
    return {
      article: {},
      link: '`article/detail/'
    }
  },
  created () {
    this.$http.get(server['visitor/article/like'])
      .then(res => {
        if (res.data.code === 1) {
          this.article = res.data.data
        }
      })
  }
}
</script>
<style lang="scss" scoped>
  .likeItem{
    h3{
      margin-top: 20px;
      white-space: nowrap;
      //overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      a{
        line-height: 20px;
        &:hover{
          color: #00A7EB;
        }
      }
    }
  }
</style>
