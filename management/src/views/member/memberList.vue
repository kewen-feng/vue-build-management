<template>
  <div></div>
</template>

<script>
export default {
  name: 'MemberList',
  data() {
    return
  },
  create() {
    this.getMemberList();
  },
  methods: {
    getMemberList() {
      this.$ajax({
        url: '/member/list',
        method: 'GET'
      }).then(res => {

      })
    }
  }
}
</script>

<style>

</style>