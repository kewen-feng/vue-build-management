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
          <a href="javaScript:;" @click="delMember(scope.row.id)">
            <i title="删除" class="el-icon-circle-close"></i>
          </a>
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
        method: 'POST',
        data: {}
      }).then(res => {
        this.list = res.data || [];
      });
    },

    // 删除成员
    delMember(_id) {
      console.log(1)
      this.$ajax({
        url: '/user/del',
        method: 'POST',
        data: {id: _id}
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success',
          onClose: () => {
            this.getMemberList();
          }
        });
      });
    }
  }
}
</script>

<style>

</style>