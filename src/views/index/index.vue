<template>
  <div>
    <el-row type="flex" justify="center" class="main">
      <el-col :lg="16" :xs="24">
        <el-card>
          <el-input v-model="content" placeholder="请输入要查询的内容" class="input">
            <el-button slot="append" icon="el-icon-search" type="primary" @click.native="analyzee">查询</el-button>
          </el-input>
          
          <el-row :gutter="30">
            <el-col :lg="8" :md="12" :sm="12" :xs="24">
              <explain/>
            </el-col>
            <el-col :lg="16" :md="12" :sm="12" :xs="24">
              <el-input class="result" type="textarea" v-model="result" :readonly="readonly" autosize></el-input>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import { analyze } from '@/api/analyze'
import Explain from './components/explain'

export default {
  components: {
    Explain
  },
  data() {
    return {
      readonly: true,
      content: '',
      result: '',
    }
  },
  methods: {
    analyzee() {
      const content = this.content
      analyze({ content }).then(response => {
        const {code, data} = response.code
        if(code == 200){
          this.$message({
            message: '解析成功',
            showClose: true,
            center: true,
            type: 'success'
          })
         
        }
      })  
    }
  }
}
</script>

<style scoped>
  .main{
    margin-top: 40px;
  }

  .input {
    margin-bottom: 30px;
  }

  .result {
    margin-bottom: 20px;
    padding: 5px;
  }
</style>