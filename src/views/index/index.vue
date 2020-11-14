<template>
  <div>
    <el-row type="flex" justify="center" class="main">
      <el-col :lg="16" :xs="24">
        <el-card>
          <el-input v-model="keyWords" placeholder="请输入要查询的内容" class="input">
            <el-button slot="append" icon="el-icon-search" type="primary" @click="analyze">查询</el-button>
          </el-input>
          
          <el-row :gutter="30">
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
              <el-input class="result" type="textarea" v-model="result" :readonly="readonly" :rows="10"></el-input>
            </el-col>
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
              <el-input type="textarea" v-model="result" :rows="10"></el-input>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import { analyze } from '@/api/analyze'

export default {
  data() {
    return {
      readonly: true,
      keyWords: '',
      result: '15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL15ascnjkL',
    }
  },
  methods: {
    analyze() {
      const keyWords = this.keyWords
      this.analyze({keyWords}).then(response => {
        
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