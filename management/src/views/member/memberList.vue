<template>
  <div></div>
</template>

<script>
export default {
  name: 'MemberList',
  data() {
    return {}
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
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>