<template>
  <div class="container">
    <div class="explain" v-for="(color, index) in colors" :key="index">
      <div class="label">{{labels[index]}}</div>
      <div class="label labelspe" :style="{'background-color': color}"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Explain',
  data() {
    return{
      colors: ['#1844EC', '#14AAE1', '#EE0808', '#3AFF09', '#FFFF33', '#FFCCFF', '#FFCC00', '#9933FF', '#CC99FF', '#FFCC99', '#CC9933', '#66FFFF'],
      labels: ['生物相关词汇', '普通名词', '动物名', '植物名', '疾病', '食品', '药品', '化学名', '人名', '地名', '机构团体', '其他专名']    
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 15px;
    border: #707070 solid 1px;
    border-radius: 5px;
  }

  .explain {
    width: 200px;
    height: 20px;
    margin: 0 auto 20px auto;
    position: relative;
  }

  .label {
    float: right;
    width: 100px;
    height: 20px;
  }

  .labelspe{
    position: relative;
    right: 20px;
  }
</style>