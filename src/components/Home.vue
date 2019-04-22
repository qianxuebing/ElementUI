<template>
  <div class="wrapper">
    <common-header></common-header>
    <common-sidebar></common-sidebar>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
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
