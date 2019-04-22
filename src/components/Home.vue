<template>
  <div class="wrapper">
    <common-header></common-header>
    <common-sidebar></common-sidebar>
  </div>
</template>

<script>
import CommonHeader from './common/Header'
import CommonSidebar from './common/Sidebar'
export default {
  name: 'Home',
  components: {
    CommonHeader,
    CommonSidebar
  }
}
</script>

<style scoped>

</style>
