<template>
  <div class="w1200 center">
    <form @submit="handleSubmit" ref="from">
      <div class="articleTitle">
        <label for="itemTitle">文章标题:</label><br/><input type="text" v-model="itemTitle" required placeholder="请输入文章的标题" id="itemTitle" ref="itemTitle" name="itemTitle">
      </div>
      <p class="itemContent">文章内容：</p>
      <quill-editor v-model="itemContent"
                    ref="myQuillEditor"
                    :options="editorOption"
                    >
      </quill-editor>
      <p class="itemContent">
        文章标签：
      </p>
      <div class="itemTag" ref="itemTag">
        <input type="checkbox" value="html" v-model="tag" name="itemTag">html
        <input type="checkbox" value="css" v-model="tag" name="itemTag">css
        <input type="checkbox" value="js" v-model="tag" name="itemTag">js
        <input type="checkbox" value="其他" v-model="tag" name="itemTag">其他
      </div>
      <button class="btn" ref="btn" @click.prevent="handleSubmit">提交</button>
    </form>
  </div>
</template>
<script>
import {quillEditor, Quill} from 'vue-quill-editor'
import { ImageDrop } from 'quill-image-drop-module'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
import ImageResize from 'quill-image-resize-module'
import utils from 'Config/utils'
import server from 'Config/server'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Quill.register('modules/ImageExtend', ImageExtend)
Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)

export default {
  data () {
    return {
      itemContent: '',
      itemTitle: '',
      tag: [],
      editorOption: {
        modules: {
          imageDrop: true,
          ImageExtend: {
            loading: true,
            name: 'file',
            accept: 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon',
            action: server['user/article/images'],
            response: (res) => {
              return server['images'] + res.filename
            }
          },
          toolbar: {
            container: container,
            handlers: {
              'image': function () {
                QuillWatch.emit(this.quill.id)
              }
            }
          },
          imageResize: true
        },
        placeholder: '请输入文章内容'
      }
    }
  },
  methods: {
    handleSubmit () {
      let obj = {itemTitle: this.itemTitle, itemContent: this.itemContent, tag: this.tag}
      let url = server['user/article/add']
      if (this.href.indexOf('?') !== -1) {
        url = `${server['user/article/update']}?id=${this.id}`
      }
      this.$http.post(url, obj)
        .then(res => {
          if (res.data.code === 1) {
            this.itemContent = ''
            this.itemTitle = ''
            this.$refs.from.reset()
            location.href = '#/article/success'
          } else {
            alert('文章增加/修改失败了')
          }
        })
    },
    ...utils
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  components: {
    quillEditor
  },
  mounted () {
  },
  created () {
    this.href = location.href
    if (this.href.indexOf('?') !== -1) {
      let query = location.href.split('?')[1]
      let id = query.split('=')[1]
      this.id = id
      console.log(id)
      this.$http.get(`${server['visitor/article/detail']}?id=${id}`)
        .then(res => {
          if (res.data.code === 1) {
            const response = res.data.data
            for (let key in response) {
              this[key] = response[key]
            }
          }
        })
    }
  }
}
</script>
<style lang="scss">
  .articleTitle{
    margin: 20px 0;
    label{
      font-size: 18px;
      margin-right: 20px;
      color: #00A7EB;
    }
    input{
      width: 100%;
      height: 30px;
      margin-top: 20px;
      border: 1px solid #BFCBD9;
      border-radius: 3px;
    }
  }
  form{
    .itemContent{
      margin-bottom: 20px;
      margin-top: 20px;
      font-size: 18px;
      color: #00A7EB;
    }
    .ql-container{
      min-height: 300px;
    }
    .btn{
      width: 60px;
      padding: 5px;
      border: 1px solid #00A7EB;
      color: #00A7EB;
      cursor: pointer;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 100px;
    }
    .itemTag{
      input{
        margin-right: 5px;
      }
    }
  }
</style>
