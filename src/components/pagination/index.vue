<template>
  <div class="pagination clearbox">
    <ul>
      <li @click="handleChangePage(currentPage-1)">&lt;</li>
      <li v-for="(item, key) in pageNum" :key="key" :class="item===currentPage?'active': ''" @click="handleChangePage(item)">{{item}}</li>
      <li @click="handleChangePage(currentPage+1)">&gt;</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['total', 'currentPage', 'pageSize'],
  data () {
    return {
    }
  },
  computed: {
    pageNum () {
      const items = 9
      const pageItems = Math.ceil(this.total / this.pageSize)
      let arr = []
      for (let i = 0; i < pageItems; i++) {
        arr.push(i + 1)
      }
      const result = this.computePage(items, pageItems, arr)
      return result
    }
  },
  methods: {
    handleChangePage (page) {
      const pageItems = Math.ceil(this.total / this.pageSize)
      page = page < 1 ? 1 : page
      page = page > pageItems ? pageItems : page
      this.$emit('page-Change', page, 10)
    },
    computePage (num, pageNum, arr) {
      let mid = this.currentPage
      let left = mid - num / 2
      let right = mid + num / 2
      left = left < 1 ? 1 : left
      left = right > pageNum ? pageNum - num + 1 : left
      return arr.splice(left, num)
    }
  }
}
</script>
<style lang="scss">
  .pagination{
    width: 100%;
    overflow: hidden;
    /*margin-top: 50px;*/
    ul{
      font-size: 0;
      margin: 0 auto;
      text-align: center;
      li{
        font-size: 14px;
        display: inline-block;
        padding: 10px;
        cursor: pointer;
      }
    }
    .active{
      color: #00A7EB;
    }
  }
</style>
