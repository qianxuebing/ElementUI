<template>
  <div class="users">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline">

      <!--城市-->
      <el-form-item label="城市">
        <el-cascader
          :options="options"
          v-model="selectedOptions"></el-cascader>
      </el-form-item>

      <!--姓名-->
      <el-form-item label="姓名">
        <el-input
          v-model="formInline.name"
          placeholder="姓名"></el-input>
      </el-form-item>

      <!--地址-->
      <el-form-item label="地址">
        <el-select
          v-model="formInline.address"
          placeholder="地址">
          <el-option
            v-for="(item, index) in addressList"
            :key="index"
            :label="item"
            :value="item"></el-option>
        </el-select>
      </el-form-item>

      <!--日期-->
      <el-form-item>
        <el-date-picker
          v-model="selectDate"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0"></el-date-picker>
      </el-form-item>

      <!--查询-->
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <!--table-->
    <el-table
      :data="tableData"
      v-loading="loading2"
      element-loaing-text="拼命加载中"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="140">
        <template scope="scope">
          <el-button
            type="text"
            size="small">
            查看
          </el-button>
          <el-button
            type="text"
            size="small">
            编辑
          </el-button>
          <el-button
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--分页-->
    <div class="block">
      <div class="r_btn">
        <el-button
          type="primary">
          批量删除
        </el-button>
      </div>
      <div class="r_page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10,20,30,40]"
          :page-size="pageSize"
          layout="total,sizes,prev,pager,next,jumper"
          :total="total"></el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      formInline: {
        name: '',
        address: '',
        id: ''
      },
      addressList: ['上海市普陀区金沙江路 1518 弄', '上海市普陀区金沙江路 1519 弄', '上海市普陀区金沙江路 1517 弄'],
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      selectDate: '',
      options: [{
        value: '湖南',
        label: '湖南',
        children: [{
          value: '长沙',
          label: '长沙'
        }, {
          value: '株洲',
          label: '株洲'
        }, {
          value: '湘潭',
          label: '湘潭'
        }]
      }],
      loading2: false,
      selectedOptions: [],
      tableData: [],
      currentPage: 1,
      total: 0,
      pageSize: 10
    }
  },
  methods: {
    loadDate () {
      this.loading2 = true
      var params = {
        page: this.currentPage,
        pageSize: this.pageSize,
        name: this.formInline.name,
        address: this.formInline.address
      }
    },
    onSubmit () {
      console.log('submit')
    },
    handleSizeChange (val) {
      this.pageSize = val
    },
    handleCurrentChange (val) {
      this.currentPage = val
    }
  }
}
</script>

<style scoped>
  .block{
    width: 100%;
    margin-top: 20px;
  }
  .block .r_btn{
    float: left;
    width: 90px ;
  }
  .block .r_page{
    float: right;
  }
</style>
