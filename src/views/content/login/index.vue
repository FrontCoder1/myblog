<template>
  <div class="login center">
    <title-bar title="登录"></title-bar>
    <form @click.prevent ref="form">
      <section>
        <input type="text" name="userName" id="userName" placeholder="账号" required v-model="userName">
      </section>
      <section>
        <input type="password" name="password" id="password" maxlength="15" required v-model="password" placeholder="密码" autocomplete="new-password">
      </section>
      <section>
        <button class="submit" @click="handleSubmit">登录</button>
      </section>
    </form>
    <p class="more-type">更多登录方式</p>
  </div>
</template>
<script>
import TitleBar from 'Components/titleBar.vue'
import {mapActions} from 'vuex'
import server from 'Config/server'
import MD5 from 'js-md5'
import utils from 'Config/utils'
export default {
  components: {TitleBar},
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['setStore']),
    validata () {
      const password = this.password
      const reg = /^[\d\w]{6,15}$/
      return reg.test(password)
    },
    handleSubmit (e) {
      if (this.validata()) {
        const tokenString = parseInt(Math.random() * 100)
        let password = MD5(this.password)
        password = MD5(password + tokenString)
        let data = {
          userName: this.userName,
          password: password,
          tokenString: tokenString
        }
        this.$http.post(server['user/login'], data)
          .then(res => {
            const responseData = res.data
            if (responseData.code === 1) {
              const store = {
                userName: responseData.data.userName,
                token: responseData.data.token
              }
              utils.setStorage(store)
              this.setStore(responseData.data)
              this.$router.push('/admin')
            }
          })
      } else {
        alert('密码格式不正确')
      }
    }
  }
}
</script>
<style lang="scss">
  .login{
    max-width: 500px;
    min-height: 500px;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-shadow: 0px 0px 2px 2px #ccc;
    box-sizing: border-box;
    padding: 0 10px 10px 10px;
    section {
      margin-top: 20px;
      width: 100%;
      box-sizing: border-box;
      input{
        box-sizing: border-box;
        border: 1px solid #ccc;
        width: 100%;
        height: 35px;
        padding-left: 5px;
        border-radius: 2px;
      }
      .submit{
        width: 100%;
        height: 35px;
        outline: none;
        border:0;
        background-color: #4cd96f;
        color: white;
        border-radius: 3px;
        cursor: pointer;
      }
    }
    .more-type{
      text-align: center;
      color: #777;
      margin-top: 20px;
      font-size: 14px;
    }
  }
</style>
