<template>
  <div class="accident">
    <div class="accident_title item_title">会议室使用率</div>
    <div class="accident_item item">
      <div class="item_tv item">
        <img src="../../image/image90.png" class="item_tv_img" />
        <div class="item_tv_word">
          <div class="item_word_max">{{ tvRoom }}间</div>
          <div>已使用</div>
        </div>
      </div>

      <div class="item_main item">
        <img src="../../image/image89.png" class="item_main_img" />
        <div class="item_main_word">
          <div class="item_word_max">{{ mainRoom }}间</div>
          <div>总数</div>
        </div>
      </div>
    </div>

    <div class="accident_total">
      <div class="accident_total_word">使用率{{ roomRate }}%</div>
      <div class="accident_total_img"></div>
      <div class="accident_total_img2" id="accident_total_img2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accident',
  data() {
    return {
      tvRoom: 9,
      mainRoom: 20,
      roomRate: 0,
    }
  },
  mounted() {
    this.roomRate = ((this.tvRoom / this.mainRoom) * 100).toFixed(0)
    const imgWidth = document.getElementById('accident_total_img2')
    imgWidth.style.width = (this.tvRoom / this.mainRoom) * 100 + '%'
    // console.log(imgWidth)
  },
}
</script>

<style scoped>
.accident {
  height:25%;
  color: aliceblue;
  font-size: .22rem;
}

.item {
  display: flex;
  flex-direction: row;
}
.accident_item{
  margin-top: .2rem;
}
.item_main_img,
.item_tv_img {
  background-image: url(../../image/image84.png);
  background-size: contain;
  background-repeat: no-repeat;
  height: 1.6rem;
  widows: 1.6rem;
}
.item_main_img {
  margin-left: .5rem;
}
.item_tv_word,
.item_main_word {
  width: 1.6rem;
  height: 1.6rem;
  background-color: rgba(60, 127, 160, 0.5);
  border-radius: 0.1rem;
  margin-left: 0.2rem;
  text-align: center;
  color: #85caff;
}
.item_word_max {
  margin-top: 0.2rem;
  font-weight: bold;
  font-size: .48rem;
  color: #fff;
}

.accident_total {
  margin-top: .6rem;
  position: relative;
}
.accident_total_word {
  margin-bottom: .2rem;
  font-size: .4rem;
}
.accident_total_img {
  background-color: rgba(147, 151, 151, 0.6);
  width: 100%;
  height: 0.24rem;
  border-radius: 0.24rem;
}
.accident_total_img2 {
  background: linear-gradient(to right, #fff , #26D6A0 );
  height: 0.24rem;
  border-radius: 0.24rem;
  position: absolute;
  top: .78rem;
}
</style>
