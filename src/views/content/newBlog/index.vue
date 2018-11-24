<template>
  <div class="clearbox">
    <title-bar title="最新博客" :isAdmin="isAdmin"></title-bar>
    <blog-item v-for="(value, index) in article" :message="value" :key="index" :isAdmin="isAdmin"></blog-item>
    <pagination :total="total" :currentPage="currentPage" @page-Change="handleSubmit" :pageSize="pageSize"></pagination>
  </div>
</template>
<script>
import titleBar from 'Components/titleBar.vue'
import blogItem from 'Components/blogItem/index.vue'
import server from 'Config/server'
import Pagination from 'Components/pagination/index'
export default {
  components: { titleBar, blogItem, Pagination },
  props: [ 'isAdmin' ],
  data () {
    return {
      article: [],
      total: 200,
      currentPage: 1,
      pageSize: 10
    }
  },
  methods: {
    handleSubmit (page = 1, size = 10) {
      this.$http.get(`${server['visitor/article']}?currentPage=${page}&pageSize=${size}`)
        .then(res => {
          this.article = res.data.data
          this.total = res.data.total
          this.currentPage = page
          this.pageSize = size
        })
    }
  },
  mounted () {
    this.$http.get(`${server['visitor/article']}?currentPage=1&pageSize=10`)
      .then(res => {
        this.article = res.data.data
        this.total = res.data.total
      })
  }
}
</script>
<style>
</style>
