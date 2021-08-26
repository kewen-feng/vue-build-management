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
        this.list = res.list || [];
      })
    }
  }
}
</script>

<style>

</style>