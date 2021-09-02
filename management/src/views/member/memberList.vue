<template>
  <div>
    <el-table :data="list" border>
      <el-table-column label="id" align="center" prop="id"></el-table-column>
      <el-table-column label="用户名" align="center" prop="username"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MemberList',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getMemberList();
  },
  methods: {
    getMemberList() {
      this.$ajax({
        url: '/user/list',
        method: 'POST'
      }).then(res => {
        console.log(res)
        this.list = res.data || [];
      }).catch(error => {
        console.log('memberList', error);
      });
    }
  }
}
</script>

<style>

</style>