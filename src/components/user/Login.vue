<template>
  <div class="login-wrap">
    <div class="ms-login">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        class="demo-ruleForm">
        <div class="ms-title">营销业务智能追踪系统</div>
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            placeholder="username">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')">
            登录
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm (formname) {
      console.log(formname)
    }
  }
}
</script>

<style scoped>
  .login-wrap{
    width: 100%;
    height: 40%;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 15px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .ms-title{
    margin: -30px auto 40px auto;
    text-align: center;
    font-size: 30px;
    color: #505458;
  }
  .ms-login{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 160px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background-color: #fff;
  }
  .login-btn{
    text-align: center;
  }
  .login-btn button{
    width: 100%;
    height: 36px;
  }
</style>
