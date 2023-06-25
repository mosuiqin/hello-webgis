<template>
  <div class="property">
    <div class="property_title item_title">资产分类统计</div>
    <div class="property_bar" id="property_bar"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'property',
  data() {
    return {
      propertyData: [
        ['房屋建筑物', '无形资产', '机器设备', '电子设备', '装修改良'],
        [100, 600, 2200, 4100, 220],
      ],
    }
  },
  mounted() {
    const propertyBar = echarts.init(document.getElementById('property_bar'))
    const propertyOption = {
      tooltip: {
        formatter: '{b0}:{c0}',
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top:'3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: this.propertyData[0],
          axisLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.8,
            },
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.85)',
          },
          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#fff',
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              opacity: 0.5,
            },
          },
        },
      ],
      series: [
        {
          name: 'property',
          type: 'bar',
          barWidth: '60%',
          data: this.propertyData[1],
          color: ['#4da8fd'],
        },
      ],
    }
    propertyBar.setOption(propertyOption)
  },
}
</script>

<style scoped>
.property {
  height: 30%
}
.property_bar {
  width: 100%;
  height: 5rem;
}
</style>
