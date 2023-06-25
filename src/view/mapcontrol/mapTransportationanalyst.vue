<template>
  <div>
    <button @click="handleTran(map, draw)">路径分析</button>
  </div>
</template>

<script>
import MapboxDraw from '@mapbox/mapbox-gl-draw'
// import turf from '@turf/turf'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import mapboxgl from '@supermap/vue-iclient-mapboxgl/static/libs/mapboxgl/mapbox-gl-enhance.js'
import '@supermap/vue-iclient-mapboxgl/static/libs/iclient-mapboxgl/iclient-mapboxgl.min'

let pointList = []
const updatePoints = (draw) => {
  const data = draw.getAll()
  if (data.features.length > 1) {
    for (let item of data.features) {
      pointList.push(
        new mapboxgl.LngLat(
          item.geometry.coordinates[0],
          item.geometry.coordinates[1]
        )
      )
    }
  }
}

var resultSetting = new mapboxgl.supermap.TransportationAnalystResultSetting({
  //是否在分析结果中包含弧段要素集合
  returnEdgeFeatures: true,
  //返回的弧段要素集合中是否包含集合对象信息
  returnEdgeGeometry: true,
  //返回的结果中是否包含经过弧段ID集合
  returnEdgeIDs: true,
  //返回的分析结果总是否包含结点要素集合
  returnNodeFeatures: true,
  //返回的结点要素集合中是否包含集合对象信息
  returnNodeGeometry: true,
  //返回的分析结果中是否包含经过结点ID集合
  returnNodeIDs: true,
  //返回分析结果中是否包含行驶导引集合
  returnPathGuides: true,
  //返回结果中是否包含路由对象集合
  returnRoutes: true,
})
//网络分析通用参数
var analystParameter = new mapboxgl.supermap.TransportationAnalystParameter({
  //分析结果返回的内容
  resultSetting: resultSetting,
  //阻力字段的名称
  // weightFieldName: 'length',
})
//最佳路径分析参数
var findPathParams = new mapboxgl.supermap.FindPathParameters({
  //是否通过结点ID指定路径分析的结点
  isAnalyzeById: false,
  //最佳路径分析经过的结点或设施点数组
  nodes: [],
  //是否按照弧段数最少的进行最佳路径分析
  hasLeastEdgeCount: false,
  //交通网络分析通用参数
  parameter: analystParameter,
})

export default {
  name: 'mapTransportationanalyst',
  props: { map: Object, layer: String },
  data() {
    return {
      TransportationList: [
        {
          id: 'B01',
          value:
            'http://10.45.1.179:8090/iserver/services/transportationAnalyst-YY/rest/networkanalyst/RoudPath_Network_B01@RoudPath',
        },
        {
          id: 'F01',
          value:
            'http://10.45.1.179:8090/iserver/services/transportationAnalyst-YY-2/rest/networkanalyst/RoudPath_Network_F01@RoudPath',
        },
        {
          id: 'F02',
          value:
            'http://10.45.1.179:8090/iserver/services/transportationAnalyst-YY-4/rest/networkanalyst/RoudPath_Network_F02@RoudPath',
        },
      ],
      activeTran: false,
      draw: null,
    }
  },
  computed: {
    serviceUrl: function () {
      const indexLayer = this.TransportationList.findIndex((item) => {
        return item.id === this.layer
      })
      return this.TransportationList[indexLayer].value
    },
  },
  watch: {
    layer: function () {
      pointList = []
      this.activeTran = false
      if (this.draw) {
        this.draw.deleteAll()
      }
      if (this.map.getLayer('route')) {
        this.map.getSource('route').setData({
          type: 'FeatureCollection',
          features: [],
        })
      }
    },
  },
  methods: {
    handleTran(map, draw) {
      this.activeTran = true

      map.on('draw.update', updatePoints(draw))
      console.log(pointList)
      console.log(this.serviceUrl)
      if (pointList && this.activeTran) {
        var findPathService = new mapboxgl.supermap.NetworkAnalystService(
          this.serviceUrl
        )
        findPathParams.nodes = pointList

        //向服务器发送请求，并对返回的结果进行分析处理，展示在客户端上
        findPathService.findPath(findPathParams, function (serviceResult) {
          //获取服务器返回的结果
          var result = serviceResult.result

          // 绘制分析结果
          // map.addLayer({
          //   id: 'route',
          //   type: 'line',
          //   source: {
          //     type: 'geojson',
          //     data:  result.pathList[0].route,

          //   },
          //   paint: {
          //     'line-color': 'red',
          //     'line-width': 5,
          //   },
          // })
          const trGeojson = {
            type: 'FeatureCollection',
            features: [],
          }
          trGeojson.features.push(result.pathList[0].route)
          map.getSource('route').setData(trGeojson)
        })
      }
    },
  },
  mounted() {
    this.map.on('load', () => {
      this.draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          point: true,
          trash: true,
        },
        defaultMode: 'draw_point',
      })
      this.map.addControl(this.draw)

      this.map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [],
          },
        },
        paint: {
          'line-color': 'red',
          'line-width': 5,
        },
      })
    })
  },
}
</script>

<style scoped>

</style>
