<template>
  <div class="vheader">
    <div class="title">智慧园区管理</div>
    <div class="lefttabs tabs">
      <div
        :class="{
          'tab-item': true,
          'tab-item-active': item.key === activeKey,
        }"
        v-for="item in leftTabs"
        :key="item.key"
        @click="handleTab(item.key)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="righttabs tabs">
      <div
        class="tab-item"
        v-for="item in rightTabs"
        :key="item.key"
        :class="{
          'tab-item': true,
          'tab-item-active': item.key === activeKey,
        }"
        @click="handleTab(item.key)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vheader',
  data() {
    return {
      rightTabs: [
        { key: '4', name: '综合态势' },
        { key: '5', name: '综合安防' },
        { key: '6', name: '综合人员' },
      ],
      leftTabs: [
        { key: '1', name: '综合态势' },
        { key: '2', name: '综合安防' },
        { key: '3', name: '综合人员' },
      ],
      activeKey: '2',
    }
  },
  methods: {
    handleTab(Tabkey) {
      this.activeKey = Tabkey
      this.$emit('TabEvent', this.activeKey)
    },
  },
}
</script>

<style scoped>
.vheader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 6%;
}
.title {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  background: transparent;
  font-size: 0.68rem;
  text-align: center;
  background-image: url('../image/image91.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 2rem;
  line-height: 1.2rem;
}
.tabs {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 40%;
  width: 20%;
  justify-content: center;
  align-items: center;
}
.lefttabs {
  left: 5%;
}
.righttabs {
  right: 5%;
}
.tab-item {
  color: #86caff;
  font-size: 0.5rem;
  background-image: url('../image/image78.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  text-align: center;
  margin-right: 0.4rem;
}
.lefttabs .tab-item:last-child,
.righttabs .tab-item:last-child {
  margin-right: 0;
}
.tab-item-active {
  color: #ffcb70;
  background-image: url('../image/image77.png');
}
</style>
