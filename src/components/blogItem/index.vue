<template>
  <div class="item clearbox">
    <div class="mt20"><span class="tag">{{tag.join('|')}}</span><span class="s"></span> <span class="itemTitle">{{itemTitle}}</span></div>
    <p class="mt20 itemContent">{{itemContent}}</p>
    <div class="mt20 autor">
      <em>{{itemTime}}</em>
      <span>浏览量:（{{visitor}}）</span>
      <a :href="itemUrl" class="float-right">查看全文>></a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: Object
    }
  },
  data () {
    return {
      ...this.$props.message
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
  .item{
    padding: 10px;
    border-bottom: 1px solid #ccc;
    .itemTitle{
      color: #555;
      font-weight: bold;
      margin-left: 20px;
    }
    .mt20{
      margin-top: 20px;
    }
    .itemContent{
      line-height: 20px;
      max-height: 60px;
      overflow: hidden;
      color: #888;
    }
    .autor{
      em{
        font-size: 12px;
        color: #888;
      }
      span{
        margin: 0 5px;
        font-size: 12px;
        color: #888;
      }
      a{
        color: #096;
      }
    }
  }
  .tag{
    padding: 0 10px;
    background: #333;
    color: #ffffff;
    text-align: center;
    border-radius: 3px;
    font-weight: bold;
  }
  .s{
    width: 10px;
    height: 10px;
    background: #333;
    display: inline-block;
    content: '';
    transform: translate(-50%, 15%) rotate(45deg);
  }
</style>
