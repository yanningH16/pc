<template>
  <div class="wrap">
    第三个页面 姑苏城外寒山寺
    <div style="width:500px; height:500px" ref='echartGet'></div>
  </div>
</template>
<script type="text/ecmascript-6">
import echarts from 'echarts'
export default {
  name: 'money',
  data () {
    return {
      option: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
        },
        series: [{
          coordinateSystem: 'polar',
          name: 'line',
          type: 'line',
          data: []
        }]
      }
    }
  },
  mounted () {
    this.aaa()
  },
  methods: {
    aaa () {
      for (var i = 0; i <= 100; i++) {
        var theta = i / 100 * 360
        var r = 5 * (1 + Math.sin(theta / 180 * Math.PI))
        this.option.series[0].data.push([r, theta])
      }
      let abc = echarts.init(this.$refs.echartGet)
      abc.setOption(this.option)
      console.log(this.option.series[0].data)
    }
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
