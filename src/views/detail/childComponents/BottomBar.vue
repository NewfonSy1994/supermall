<template>
  <div class="bottom-bar">
    <div class="three">
      <div class="kefu">
        <img src="~assets/img/detail/kefu.png" alt />
        <p>客服</p>
      </div>
      <div class="shop">
        <img src="~assets/img/detail/shop.png" alt />
        <p>店铺</p>
      </div>
      <div class="collect">
        <img src="~assets/img/detail/collect.png" alt />
        <p>收藏</p>
      </div>
    </div>
    <div class="join" @click="addToCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    }
  },
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100 / @vw;
  background-color: #fff;
  z-index: 100;
  img {
    width: 50 / @vw;
    height: 50 / @vw;
  }
  .three {
    flex: 5;
    box-sizing: border-box;
    padding: 10 / @vw 0;
    display: flex;
    justify-content: space-around;
    font-size: 26 / @vw;
  }
  .join {
    flex: 3;
    line-height: 100 / @vw;
    text-align: center;
    background-color: #f5e44e;
  }
  .buy {
    flex: 3;
    line-height: 100 / @vw;
    text-align: center;
    background-color: #e47b9f;
    color: #fff;
  }
}
</style>
