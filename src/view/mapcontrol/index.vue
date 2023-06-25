<template>
  <div class="map_wrapper">
    <div class="map" id="map"></div>
    <div class="mapcontrol" v-if="map">
      <button class="resetBtn" @click="handleReset">复位</button>
      <floorLayout :map="map" />
      
    </div>
  </div>
</template>

<script>
import floorLayout from './floorLayout.vue'

import mapboxgl from '@supermap/vue-iclient-mapboxgl/static/libs/mapboxgl/mapbox-gl-enhance'
export default {
  name: 'mapView',
  components: { floorLayout },
  data() {
    return {
      map: null,
      mapOption: {
        container: 'map',
        center: [104.5895, 28.7196],
        zoom: 18,
        style: {
          version: 8,
          sources: {
            baseLayer_img: {
              type: 'raster',
              tiles: [
                'https://t0.tianditu.gov.cn/img_w/wmts?tk=1d109683f4d84198e37a38c442d68311&service=WMTS&request=GetTile&version=1.0.0&style=default&tilematrixSet=w&format=tiles&width=256&height=256&layer=img&tilematrix={z}&tilerow={y}&tilecol={x}',
              ],
              tileSize: 256,
            },
            baseLayer_vec: {
              type: 'raster',
              tiles: [
                'http://10.45.1.179:8090/iserver/services/map-YY-2/rest/maps/Black_outdoor_map_cn/zxyTileImage.png?z={z}&x={x}&y={y}',
              ],
              tileSize: 256,
            },
          },
          layers: [
            {
              id: 'img',
              type: 'raster',
              source: 'baseLayer_img',
              minzoom: 0,
              maxzoom: 12,
            },
            {
              id: 'vec',
              type: 'raster',
              source: 'baseLayer_vec',
              minzoom: 12,
              maxzoom: 22,
            },
          ],
        },
      },
    }
  },
  methods: {
    handleReset() {
      this.map.flyTo({ center: [104.5895, 28.7196], zoom: 18 })
    },
  },
  mounted() {
    this.map = new mapboxgl.Map(this.mapOption)
  },
}
</script>

<style>
.map_wrapper,
.map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mapcontrol {
  position: absolute;
  top: 3rem;
  right: 1rem;
  width: 6rem;
  height: 8rem;
  /* background-color: rgba(0, 0, 0, 0.2); */
  padding: 0.5rem;
  border-radius: 0.2rem;
}
.resetBtn {
  position: absolute;
  top: 1rem;
  right: .5rem;
  margin-bottom: 5rem;
}
</style>
