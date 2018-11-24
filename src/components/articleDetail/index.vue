<template>
  <div class="w1200 center">
    <h2 class="detailTitle">{{itemTitle}}</h2>
    <div class="blogInfo">
      <ul>
        <li>标签: {{tag.join('、')}}</li>
        <li>时间: {{itemTime}}</li>
        <li>阅读量: {{visitor}}</li>
      </ul>
    </div>
    <div v-html="itemContent" class="detailContent"></div>
  </div>
</template>
<script>
import server from 'Config/server'
export default {
  data () {
    return {
      itemTitle: 'this is title',
      itemContent: '<p>this is content</p>',
      tag: ['js', 'css'],
      itemTime: '2018-11-20',
      visitor: 200
    }
  },
  created () {
    let hrefArray = location.href.split('/')
    let id = hrefArray[hrefArray.length - 1]
    this.$http.get(`${server['visitor/article/detail']}?id=${id}`)
      .then(res => {
        if (res.data.code === 1) {
          const response = res.data.data
          for (let key in response) {
            if (this[key]) {
              this[key] = response[key]
            }
          }
        }
      })
  }
}
</script>
<style lang="scss">
  .detailTitle{
    font-size: 24px;
    font-weight: normal;
    padding: 30px 0 0 0;
    color: #333;
  }
  .blogInfo{
    margin-top: 30px;
    overflow: hidden;
    ul{
      color: #748594;
      font-size: 0;
      li{
        display: inline-block;
        font-size: 12px;
        margin-right: 20px;
      }
    }
  }
  .detailContent{
    margin-top: 20px;
  }
</style>
