<template>
  <div>
    <div class="btn">
      <div
        :class="{ btnItem: true, btnItem_active: item === activeLayer }"
        v-for="item in btnList"
        :key="item"
        @click="handleLayers(item)"
      >
        {{ item }}
      </div>
    </div>
    <mapTransportationanalyst :map="map" :layer="activeLayer" />
  </div>
</template>

<script>
import mapTransportationanalyst from './mapTransportationanalyst.vue'
export default {
  name: 'floorLayout',
  props: { map: Object },
  components: { mapTransportationanalyst },
  data() {
    return {
      host: 'http://10.45.1.179:8090/iserver/services/map-YY-2/rest/maps/',
      mapList: [
        { id: 'B01', value: 'Black_floor_map_B01_YY01_cn' },
        { id: 'F01', value: 'Black_floor_map_F01_YY01_cn' },
        { id: 'F02', value: 'Black_floor_map_F02_YY01_cn' },
      ],
      btnList: [],
      activeLayer: '',
    }
  },
  methods: {
    handleLayers(layer) {
      const layerStatus = this.map.getLayoutProperty(layer, 'visibility')
      if (this.activeLayer) {
        this.map.setLayoutProperty(this.activeLayer, 'visibility', 'none')
        this.activeLayer = null
      }
      

      if (layerStatus === 'visible') {
        this.map.setLayoutProperty(layer, 'visibility', 'none')
      } else {
        this.map.setLayoutProperty(layer, 'visibility', 'visible')
        this.activeLayer = layer
      }
    },
  },
  mounted() {
    this.map.on('load', () => {
      for (let i = 0; i < this.mapList.length; i++) {
        this.btnList.push(this.mapList[i].id)
        this.map.addLayer(
          {
            id: this.mapList[i].id,
            type: 'raster',
            source: {
              type: 'raster',
              tiles: [
                this.host +
                  this.mapList[i].value +
                  '/zxyTileImage.png?z={z}&x={x}&y={y}&transparent=true',
              ],
              tileSize: 256,
            },
            layout: {
              visibility: 'none',
            },
          },
          'gl-draw-polygon-fill-inactive.cold'
        )
      }
    })
  },
}
</script>

<style scoped>
.btn {
  width: 1.6rem;
  height: 4.5rem;
  background-color: rgba(168, 165, 165, 0.693);
  color: #fff;
  border-radius: 0.2rem;
  border-color: #fff;
}
.btnItem {
  border-bottom: 0.001rem solid #fff;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
}
.btnItem_active {
  background-color: rgba(231, 221, 221, 0.693);
}
.btnItem:last-child {
  border-bottom: none;
}
</style>
