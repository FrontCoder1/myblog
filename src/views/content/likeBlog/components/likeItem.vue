<template>
  <div class="likeItem">
    <h3 v-for="(value, index) in article" :key="index"><a :href="value.itemUrl">
      {{index+1}}.{{value.itemTitle}}
    </a></h3>
  </div>
</template>
<script>
export default {
  data () {
    return {
      article: [{
        tag: ['js', 'css'],
        itemTitle: 'js相关的一些知识点',
        itemContent: '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '      \'我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格\',\n' +
        '      \'我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格\',\n',
        itemUrl: 'jfklasjlkf/sjadkfj/sadjkf',
        itemTime: '2018年11月1号',
        visitor: 20
      }, {
        tag: ['js', 'css'],
        itemTitle: 'js相关的一些知识点askjdf',
        itemContent: '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '      \'我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格\',\n' +
        '      \'我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格\',\n',
        itemUrl: 'jfklasjlkf/sjadkfj/sadjkf',
        itemTime: '2018年11月1号',
        visitor: 20
      }, {
        tag: ['js', 'css'],
        itemTitle: 'js相关的一些知识点asdjflkasjdflkjasdlkfj',
        itemContent: '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格' +
        '      \'我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格\',\n' +
        '      \'我曾经是一张白纸，师长教我在上面写写画画，于是我有了自己的风格\',\n',
        itemUrl: 'jfklasjlkf/sjadkfj/sadjkf',
        itemTime: '2018年11月1号',
        visitor: 20
      }]
    }
  }
}
</script>
<style lang="scss">
  .likeItem{
    h3{
      margin-top: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
