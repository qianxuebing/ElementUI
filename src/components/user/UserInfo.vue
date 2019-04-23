<template>
  <div>
    <el-row>
      <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <!--<div style="padding: 14px;">-->
            <!--<span>好吃的汉堡</span>-->
            <!--<div class="bottom clearfix">-->
              <!--<time class="time">{{ currentDate }}</time>-->
              <!--<el-button type="text" class="button">操作按钮</el-button>-->
            <!--</div>-->
          <!--</div>-->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      // currentDate: new Date().toDateString()
    }
  }
}
</script>

<style scoped>
  .el-card{
    transition: .15s box-shadow, .15s margin-top;
  }
  .el-card:hover{
    box-shadow: 0 0 20px rgba(0,0,0, .35);
    margin-top: -5px;
  }
</style>
