<template>
  <div class="wrapper">
    <vheader @TabEvent="handleTab" />
    <rightstatus v-if="activeStatus === '2'" />
    <leftstatus v-if="activeStatus === '1'" />
    <!-- 加载天地图 -->
    <!-- <sm-web-map
      :map-options="mapOptions"
      @load.once="handelLoadMap"
    ></sm-web-map> -->
    <mapcontrol />
    <footer></footer>
  </div>
</template>

<script>
import rightstatus from './rightstatus/index.vue'
import vheader from './vheader.vue'
import leftstatus from './leftstatus/index.vue'
import mapcontrol from './mapcontrol/index.vue'
export default {
  name: 'Home',
  components: { vheader, rightstatus, leftstatus, mapcontrol },
  data() {
    return {  
      activeStatus: '2',
      map: null,
    }
  },
  methods: {
    handleTab(msg) {
      this.activeStatus = msg
    },
  },
  mounted() {

  },
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #16162d;
}
footer {
  background-image: url(../image/image91.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.8rem;
  width: 100%;
}
</style>
