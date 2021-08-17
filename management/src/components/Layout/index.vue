<template>
  <el-container>
    <el-container>
      <el-aside width="200px">
        <NavBar></NavBar>
      </el-aside>
      <el-main></el-main>
    </el-container>
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

  }
}
</script>

<style>

</style>