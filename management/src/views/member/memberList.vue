<template>
  <div>
    <el-table :data="list" border>
      <el-table-column prop="name"></el-table-column>
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
        url: '/member/list',
        method: 'GET'
      }).then(res => {
        console.log(res)
        this.list = res.list || [];
      }).catch(error => {
        console.log('memberList', error);
      });
    }
  }
}
</script>

<style>

</style>