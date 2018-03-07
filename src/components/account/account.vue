<template>
  <div class='wrap'>
    第一个页面
    <h2 style='color:red'>月落乌啼霜满天</h2>
    <div class="left" style="width:500px; height:500px" ref='echarts'></div>
    <div class="left" style="width:500px; height:500px" ref='echartPic'></div>
    <div class="right" style="width:500px; height:500px" ref='echartGet'></div>
  </div>
</template>
<script type='text/ecmascript-6'>
import echarts from 'echarts'
export default {
  name: 'account',
  data () {
    return {
      option: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
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
          min: 0
        },
        series: [{
          coordinateSystem: 'polar',
          name: 'line',
          type: 'line',
          showSymbol: false,
          data: []
        }],
        animationDuration: 2000
      },
      getOption: {
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  mounted () {
    this.aaa()
    this.bbb()
    // var myChart = echarts.init(document.getElementById('echartContainer'))
    // vue 一般采取下面这种方式
    let myChart = echarts.init(this.$refs.echarts)
    myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  },
  methods: {
    aaa () {
      for (var i = 0; i <= 360; i++) {
        var t = i / 180 * Math.PI
        var r = Math.sin(2 * t) * Math.cos(2 * t)
        this.option.series[0].data.push([r, i])
      }
      let sendChart = echarts.init(this.$refs.echartPic)
      sendChart.setOption(this.option)
    },
    bbb () {
      let aaaa = echarts.init(this.$refs.echartGet)
      aaaa.setOption(this.getOption)
    }
  }
}
</script>
<style lang='stylus' scoped>
.wrap
  background #ffffff
  overflow hidden
  margin 20px
  padding 20px
  .left
    float left
  .right
    clear both
</style>
