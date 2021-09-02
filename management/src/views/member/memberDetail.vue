<template>
  <el-card shadow="always">
    <div slot="header">
      <span>{{id ? '编辑' : '新增'}}</span>
      <el-button class="save-btn" type="primary" size="mini">保存</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'memberDetail',
  data() {
    return {
      id: this.$route.query.id || ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card__header > div {
  display: flex;
  justify-content: space-between;
  align-items: center;

}
</style>