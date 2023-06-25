<template>
  <div class="smartRadar">
    <div class="smartRadar_title item_title">智能预警统计</div>
    <div class="smartRadarChart" id="smartRadarChart"></div>
  </div>
</template>

<script>
import * as echart from 'echarts'
export default {
  name: 'smartRadar',
  data() {
    return {
      smartRadarData: [5000, 14000, 28000, 26000, 42000, 21000],
    }
  },
  mounted() {
    const smartRadarChart = echart.init(
      document.getElementById('smartRadarChart')
    )
    const smartRadarOption = {
      radar: {
        radius:'50%',
        indicator: [
          { name: '资产管理', max: 6500, color: 'rgba(255,255,255,0.85)' },
          { name: '能效管理', max: 20000, color: 'rgba(255,255,255,0.85)' },
          { name: '设施管理', max: 58000, color: 'rgba(255,255,255,0.85)' },
          { name: '环境空间', max: 26000, color: 'rgba(255,255,255,0.85)' },
          { name: '便捷通行', max: 52000, color: 'rgba(255,255,255,0.85)' },
          { name: '综合安防', max: 25000, color: 'rgba(255,255,255,0.85)' },
        ],
      },
      grid: {
        top: '3%',
        right: '3%',
        left: '3%',
      },
      series: [
        {
          name: '智能预警',
          type: 'radar',
          data: [
            {
              value: this.smartRadarData,
              areaStyle: {
                color: 'rgba(107, 188, 251, 0.25)',
              },
              itemStyle: {
                color: '#4da8fd',
              },
            },
          ],
        },
      ],
    }
    smartRadarChart.setOption(smartRadarOption)
  },
}
</script>

<style scoped>
.smartRadar {
  flex: 1;
}
.smartRadarChart {
  height: 8rem;
}
</style>
