<template>
  <el-container>
    <el-aside width="200px">
      <NavBar></NavBar>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import NavBar from './components/NavBar';
export default {
  name: 'Layout',
  components: {
    NavBar
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>