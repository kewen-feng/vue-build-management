<template>
  <div class="member-detail">
    <el-card shadow="always">
      <div slot="header">
        <span>{{id ? '编辑' : '新增'}}</span>
        <el-button class="save-btn" type="primary" size="mini" @click="save">保存</el-button>
      </div>
      <el-form label-width="80px">
        <el-form-item label="用户">
          <el-input placeholder="请输入用户" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" size="large" v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input placeholder="请输入确认密码" size="large" v-model="form.checkPassword" show-password></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'memberDetail',
  data() {
    return {
      id: this.$route.query.id || '',
      form: {
        username: '',
        password: '',
        checkPassword: ''
      }
    }
  },
  methods: {
    save() {
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
      }).catch(error => {
        console.log(error)
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