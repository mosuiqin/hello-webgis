<template>
  <div class="order">
    <div class="order_title item_title">工单处理统计</div>
    <div class="order_chart" id="order_chart"></div>
  </div>
</template>

<script>
import * as echart from 'echarts'
export default {
  name: 'order',
  data() {
    return {
      orderData: [
        ['08-28', '08-29', '08-30', '08-31', '09-01', '09-02', '09-03'],
        [3, 5, 4, 2, 9, 6, 5],
        [6, 8, 6, 11, 8, 9, 6],
      ],
    }
  },
  mounted() {
    const orderChart = echart.init(document.getElementById('order_chart'))
    const orderOption = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top:'3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: this.orderData[0],
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#fff',
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: '#fff',
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            opacity: 0.35,
          },
        },
      },
      series: [
        {
          type: 'line',
          data: this.orderData[1],
          symbol: 'circle',
          symbolSize: 5,
          color: ['#4da8fd'],
        },
        {
          type: 'line',
          data: this.orderData[2],
          symbol: 'circle',
          symbolSize: 5,
          color: ['#26d6a0'],
        },
      ],
    }
    orderChart.setOption(orderOption)
  },
}
</script>

<style scoped>
.order {
 height: 32%;
}
.order_chart {
  height: 80%; 
   width: 100%;
}
</style>
