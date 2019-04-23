<template>
  <div class="index">
    Index
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted () {
    this.open()
  },
  methods: {
    open () {
      const h = this.$createElement
      this.$notify({
        title: '标题名称',
        message: h('i', {style: 'color: teal'}, '欢迎进入程序的世界'),
        offset: 200
      })
    }
  }
}
</script>

<style scoped>

</style>
