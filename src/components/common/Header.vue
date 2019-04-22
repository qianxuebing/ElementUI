<template>
  <div class="header">
    <div class="logo">营销业务智能追踪系统</div>
    <div class="user-info">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ username }}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      username: '钱雪冰'
    }
  }
}
</script>

<style scoped>
  .header{
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
  }
  .header .logo{
    float: left;
    width: 250px;
    text-align: center;
  }
  .user-info{
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #fff;
  }
  .user-info .el-dropdown-link{
    position: relative;
    display: inline-block;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;
  }
</style>
