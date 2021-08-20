<template>
  <div class="login">
    <el-card class="login-card" shadow="always">
      <el-form class="login-form" label-width="40px">
        <el-form-item label="用户">
          <el-input placeholder="请输入用户" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" size="large" v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$ajax({
        url: '/login',
        method: 'POST',
        data: this.form
      }).then(res => {
        console.log('res', res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    height: 100%;
    background: #abcdef;
    .login-card {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: auto;
      .login-form {
        margin-top: 22px;
      }
    }
  }
</style>