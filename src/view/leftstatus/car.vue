<template>
  <div class="car">
    <div class="car_title item_title">人车数量统计</div>
    <div class="car_pie">
      <div class="car_pie_item human_pie" id="human_pie"></div>

      <div class="car_pie_item traffic_pie" id="traffic_pie"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'car',
  data() {
    return {
      hunmanData: [
        { value: 400, name: '员工' },
        { value: 290, name: '访客' },
        { value: 237, name: '安保' },
      ],
      trafficData: [
        { value: 244, name: '员工' },
        { value: 100, name: '访客' },
      ],
    }
  },
  methods: {
    drawChart() {
      const humanPie = echarts.init(document.getElementById('human_pie'))
      const humanPieOptions = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          show: true,
          itemWidth: 10,
          itemHeight: 10,
          left: 'center',
          bottom: 0,
          textStyle: {
            color: 'rgba(255,255,255,0.65)',
          },
        },
        series: [
          {
            name: '人数量统计',
            type: 'pie',
            radius: ['55%', '70%'],
            center: ['50%', '50%'],
            data: this.hunmanData,
            color: ['#4da8fd', '#26d6a0', '#ffcb71'],
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: false,
              },
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
        graphic: {
          type: 'group',
          left: 'center',
          top: 'middle',
          children: [
            {
              type: 'text',
              left: 0,
              top: -10,
              style: {
                text: this.hunmanData.reduce(
                  (prev, curr) => prev + curr.value,
                  0
                ),
                textAlign: 'center',
                fontSize: this.windowFontSize(0.24),
                fill: '#fff',
              },
            },
            {
              type: 'text',
              left: 5,
              top: 20,
              style: {
                text: '总人数',
                textAlign: 'center',
                fontSize: this.windowFontSize(0.1),
                fill: '#86CAFF',
              },
            },
          ],
        },
      }
      humanPie.setOption(humanPieOptions)

      const trafficPie = echarts.init(document.getElementById('traffic_pie'))
      const trafficPieOptions = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          show: true,
          itemGap: 15,
          itemWidth: 10,
          itemHeight: 10,
          left: 'center',
          bottom: 0,
          textStyle: {
            color: 'rgba(255,255,255,0.65)',
            fontSize: 14,
          },
        },
        graphic: {
          type: 'group',
          left: 'center',
          top: 'middle',
          children: [
            {
              type: 'text',
              left: 0,
              top: -10,
              style: {
                text: this.trafficData.reduce(
                  (prev, curr) => prev + curr.value,
                  0
                ),
                textAlign: 'center',
                fontSize: this.windowFontSize(0.24),
                fill: '#fff',
              },
            },
            {
              type: 'text',
              left: 5,
              top: 20,
              style: {
                text: '总车数',
                textAlign: 'center',
                fontSize: this.windowFontSize(0.1),
                fill: '#86CAFF',
              },
            },
          ],
        },
        series: [
          {
            name: '车数量统计',
            type: 'pie',
            startAngle: 45,
            radius: ['55%', '70%'],
            center: ['50%', '50%'],
            data: this.trafficData,
            color: ['#4da8fd', '#26d6a0'],
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: false,
              },
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      trafficPie.setOption(trafficPieOptions)
    },
    windowFontSize(res) {
      var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      if (width) {
        let fontsize = (width / 1920) * 100 //fontsize为当前屏幕的基数字体，相对于设计稿计算得到的。
        return res * fontsize
      }
    },
  },
  mounted() {
    this.drawChart()
    window.addEventListener('resize', () => {
      this.drawChart()
    })
  },
}
</script>

<style scoped>
.car {
  height: 28%;
}
.car_pie {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.car_pie_item {
  width: 50%;
  background-image: url('../../image/image86.png');
  background-repeat: no-repeat;
  background-size: 96%;
  background-position: center;
  height: 4rem;
}
</style>
