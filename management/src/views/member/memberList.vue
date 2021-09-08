<template>
  <div>
    <router-link to="/member-add" title="新增">
      <el-button type="primary" round size="mini">新增</el-button>
    </router-link>
    <el-table class="mt10" :data="list" border>
      <el-table-column label="操作" align="center" width="60">
        <template slot-scope="scope">
          <router-link :to="{ path: 'member-edit', query: {id: scope.row.id, username: scope.row.username}}" title="编辑">
            <i class="el-icon-edit-outline"></i>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column label="id" align="center" prop="id"></el-table-column>
      <el-table-column label="用户名" align="center" prop="username"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'memberList',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getMemberList();
  },
  methods: {
    // 获取列表
    getMemberList() {
      this.$ajax({
        url: '/user/list',
        method: 'POST'
      }).then(res => {
        this.list = res.data || [];
      });
    },
  }
}
</script>

<style>

</style>