<template>
  <div v-loading="loading" element-loading-text="拼命解析中">
    <el-row type="flex" justify="center" class="main">
      <el-col :lg="16" :xs="24">
        <el-card>
          <el-input v-model="content" placeholder="请输入要查询的内容" class="input">
            <el-button slot="append" icon="el-icon-search" type="primary" @click.native="analyzee(content)">查询</el-button>
          </el-input>
          
          <el-row :gutter="30">
            <el-col :lg="8" :md="12" :sm="12" :xs="24" class="explain">
              <explain/>
            </el-col>
            <el-col :lg="16" :md="12" :sm="12" :xs="24">
              <el-popconfirm
                class="error"
                title="你可以点击确认按钮向我们反馈错误"
                @confirm="error"
                confirm-button-text="反馈"
              >
                <el-button type="danger" :disabled="disabled" size="mini" slot="reference">解析错误？</el-button>
              </el-popconfirm>
              <el-input v-html="result" class="result" type="textarea" v-model="result" :readonly="readonly" autosize></el-input>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import { analyze, error } from '@/api/analyze'
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
      label: [],
      value: [],
      loading: false,
      disabled: true
    }
  },
  methods: {
    analyzee(content) {
      this.result = ''
      this.loading = true
      analyze({ content }).then(response => {
        const {code, data} = response
        if(code == 200){
          this.loading = false
          this.$message({
            message: '解析成功',
            showClose: true,
            center: true,
            type: 'success'
          })
          this.disabled = false
          this.value = data.value
          this.label = data.label
          for(let i = 0; i<this.label.length; i++){
            switch(this.label[i]){
              case 'gb':
                this.result += '<span style="background-color: #1844EC">' + this.value[i] + '</span>'
                break
              case 'n':
                this.result += '<span style="background-color: #14AAE1">' + this.value[i] + '</span>'
                break
              case 'nba':
                this.result += '<span style="background-color: #EE0808">' + this.value[i] + '</span>'
                break
              case 'nbp':
                this.result += '<span style="background-color: #3AFF09">' + this.value[i] + '</span>'
                break
              case 'nf':
                this.result += '<span style="background-color: #FFFF33">' + this.value[i] + '</span>'
                break
              case 'nhd':
                this.result += '<span style="background-color: #FFCCFF">' + this.value[i] + '</span>'
                break
              case 'nhm':
                this.result += '<span style="background-color: #FFCC00">' + this.value[i] + '</span>'
                break
              case 'nmc':
                this.result += '<span style="background-color: #9933FF">' + this.value[i] + '</span>'
                break
              case 'nr':
                this.result += '<span style="background-color: #CC99FF">' + this.value[i] + '</span>'
                break
              case 'ns':
                this.result += '<span style="background-color: #FFCC99">' + this.value[i] + '</span>'
                break
              case 'nt':
                this.result += '<span style="background-color: #CC9933">' + this.value[i] + '</span>'
                break
              case 'nz':
                this.result += '<span style="background-color: #66FFFF">' + this.value[i] + '</span>'
                break
              default:
                this.result += this.value[i]
            }
          }
        }
      })
      this.content = ''
    },
    error() {
      const label = this.label
      const value = this.value
      error({ label, value }).then(response => {
        const code = response.code
        if(code == 200) {
          this.disabled = true
          this.$message({
            message: '反馈成功',
            showClose: true,
            center: true,
            type: 'success'
          })
        }
        else {
          this.$message({
            message: '反馈失败',
            showClose: true,
            center: true,
            type: 'warning'
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
    font-size: 30px;
    overflow-y: hidden;
  }

  .explain {
    margin-bottom: 15px;
    right: 10px;
  }
</style>