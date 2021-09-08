<template>
  <div class="member-detail">
    <el-card shadow="always">
      <div slot="header">
        <span>{{id ? '编辑' : '新增'}}</span>
        <el-button class="save-btn" type="primary" size="mini" @click="save('form')">保存</el-button>
      </div>
      <el-form status-icon ref="form" label-width="80px" :model="form" :rules="rules">
        <el-form-item label="用户" prop="username">
          <el-input placeholder="请输入用户" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" size="large" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input placeholder="请输入确认密码" size="large" v-model="form.checkPassword"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'memberDetail',
  data() {
    let validataPassWord = (rule, value, callback) => {
      if (value === '') return callback(new Error('请填写密码'));
      if (this.form.checkPassword !== '') this.$refs.form.validateField('checkPassword');
      callback();
    }
    let validataCheckPassWord = (rule, value, callback) => {
      if (value === '') return callback(new Error('请再次填写密码'));
      if (value !== this.form.password) return callback(new Error('两次填写密码不一致'));
      callback();
    }
    return {
      id: this.$route.query.id || '',
      form: {
        username: '',
        password: '',
        checkPassword: ''
      },
      rules: {
        username: {required: true, message: '请输入用户名', trigge: 'blur'},
        password: {required: true, triggle: 'blur', validator: validataPassWord},
        checkPassword: {required: true, triggle: 'blur', validator: validataCheckPassWord},
      }
    }
  },
  methods: {
    save(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let ajaxUrl = this.id ? '/user/edit' : '/user/add';
          let {...ajaxParam} = this.form;
          delete ajaxParam.checkPassword;
          if (this.id) ajaxParam.id = this.id;
          this.$ajax({
            url: ajaxUrl,
            method: 'POST',
            data: ajaxParam
          }).then(res => {
            this.$message({
                message: res.data.msg,
                type: 'success',
                onClose: () => {
                  let redirect = '/member-list';
                  this.$router.replace(redirect);
                }
              });
          }).catch(error => { console.log(error); })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.member-detail {
  margin: 0 auto;
  width: 60%;
  min-width: 280px;
  max-width: 600px;
  .el-card__header > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

}
</style>