<template>
  <div class="wrap">
    第二个页面 江枫渔火对愁眠
    <div style="width:500px; height:500px" ref='echartGet'></div>
  </div>
</template>
<script type="text/ecmascript-6">
import echarts from 'echarts'
let time
export default {
  name: 'order',
  data () {
    return {
      option: {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }]
          }
        ]
      }
    }
  },
  mounted () {
    time = setInterval(() => {
      this.option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
      let abc = echarts.init(this.$refs.echartGet)
      abc.setOption(this.option)
    }, 2000)
  },
  destroyed () {
    clearInterval(time)
  }
}
</script>
<style lang="stylus" scoped>
.wrap
  background #ffffff
  overflow hidden
  margin 20px
  padding 20px
</style>
