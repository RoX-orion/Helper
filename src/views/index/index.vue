<template>
  <div>
    <el-card>
      <el-input v-model="keyWords" placeholder="请输入要查询的内容">
        <el-button slot="append" icon="el-icon-search" @click="analyze"></el-button>
      </el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWords: '',
    }
  },
  methods: {
    analyze() {
      console.log(this.keyWords)
    }
  }
}
</script>