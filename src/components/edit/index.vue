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
        <input type="checkbox" value="html" name="itemTag">html
        <input type="checkbox" value="css" name="itemTag">css
        <input type="checkbox" value="js" name="itemTag">js
        <input type="checkbox" value="其他" name="itemTag">其他
      </div>
      <button class="btn" ref="btn" @click.prevent="handleSubmit">提交</button>
    </form>
  </div>
</template>
<script>
import {quillEditor, Quill} from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
import utils from 'Config/utils'
import server from 'Config/server'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Quill.register('modules/ImageExtend', ImageExtend)
export default {
  data () {
    return {
      itemContent: '',
      itemTitle: '',
      editorOption: {
        modules: {
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
          }
        },
        placeholder: '请输入文章内容'
      }
    }
  },
  methods: {
    handleSubmit () {
      let tagArray = []
      let obj = {itemTitle: this.itemTitle, itemContent: this.itemContent}
      let tags = Array.prototype.slice.call(this.$refs.itemTag.children)
      tags.map(tag => {
        if (tag.checked) {
          tagArray.push(tag.value)
        }
      })
      obj.tag = tagArray
      this.$http.post(server['user/article/add'], obj)
        .then(res => {
          if (res.data.code === 1) {
            this.itemContent = ''
            this.itemTitle = ''
            this.$refs.from.reset()
          } else {
            alert('文章增加失败了')
          }
        })
      console.log('submit', tagArray)
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
