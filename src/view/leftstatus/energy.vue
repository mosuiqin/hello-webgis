<template>
  <div class="energy">
    <div class="energy_title item_title">能耗统计</div>
    <div class="energy_total">
      <span>年度累计同比节能</span>
      <span class="energy_total_num">{{ totalNum }}%</span>

      <div class="energy_compare">
        <div class="energy_compare_first">
          <div class="energy_compare_first_name energy_compare_name">今年</div>
          <div
            class="energy_compare_first_num energy_compare_num"
            id="energy_compare_first_num"
          >
            {{ firstNum2 }} Kwh
          </div>
        </div>
        <div class="energy_compare_last">
          <div class="energy_compare_last_name energy_compare_name">去年</div>
          <div class="energy_compare_last_num energy_compare_num">
            {{ lastNum2 }} Kwh
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'energy',
  data() {
    return {
      totalNum: 11.9,
      firstNum: 15767165,
      lastNum: 17820290,
      firstNum2: null,
      lastNum2: null,
    }
  },
  mounted() {
    this.firstNum2=(this.firstNum).toLocaleString()
    this.lastNum2=(this.lastNum).toLocaleString()
    const firstNumDom = document.getElementById('energy_compare_first_num')
    firstNumDom.style.width = (this.firstNum/this.lastNum)*80+'%'
  },
}
</script>

<style scoped>
.energy {
  color: #fff;
  font-size: 0.3rem;
  flex: 1;
}
.energy_total {
  margin-left: 0.3rem;
}
.energy_total_num {
  color: #4da8fd;
  font-size: 0.6rem;
  font-weight: bolder;
  margin-left: 0.1rem;
}
.energy_compare{
  margin-top: .5rem;
}
.energy_compare_first,
.energy_compare_last {
  display: flex;
  font-size: 0.4rem;
  margin-bottom: 0.2rem;
}
.energy_compare_name {
  background-repeat: no-repeat;
  background-size: contain;
  width: 1.4rem;
  height: 1.4rem;
  text-align: center;
  line-height: 1.4rem;
}
.energy_compare_first_name {
  background-image: url(../../image/image87.png);
}
.energy_compare_last_name {
  background-image: url(../../image/image88.png);
}
.energy_compare_num {
  background-repeat: no-repeat;
  background-size: contain;
  line-height: 0.34rem;
  margin-top: 0.2rem;
  text-indent: 0.4rem;
}
.energy_compare_first_num {
  background-image: url(../../image/image80.png);
  background-size: contain;
  height: 0.66rem;
  padding: .14rem 0 0 .2rem;
  font-size: .36rem;
}
.energy_compare_last_num {
  background-image: url(../../image/image81.png);
  width: 80%;
  height: .66rem;
  padding-top: .14rem;
  font-size: .36rem;
}
</style>
