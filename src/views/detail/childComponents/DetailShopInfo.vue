<template>
  <div class="shopInfo">
    <div class="logo">
      <img :src="shops.logo" alt />
      <span>{{shops.name}}</span>
    </div>
    <div class="info">
      <div class="num">
        <div class="sells">
          <p class="sellsNum">{{sells}}</p>
          <p class="sellsText">总销量</p>
        </div>
        <div class="count">
          <p class="countNum">{{shops.goodsCount}}</p>
          <p class="countText">全部宝贝</p>
        </div>
      </div>
      <div class="appraise">
        <div class="item" v-for="(item,index) in shops.score" :key="index">
          <span class="text">{{item.name}}</span>
          <span class="score">{{item.score}}</span>
          <span
            class="isbetter"
            :class="[item.isBetter ? 'better' : 'low']"
          >{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="go">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shops: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      newsells: 0
    };
  },
  computed: {
    sells() {
      return this.shops.sells >= 10000
        ? (this.shops.sells / 10000).toFixed(1) + "万"
        : this.shops.sells;
    }
  }
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.shopInfo {
  width: 100%;
  border-top: 16 / @vw solid #f0f0f0;
  border-bottom: 16 / @vw solid #f0f0f0;
  padding-bottom: 60 / @vw;
  .logo {
    margin: 60 / @vw 0;
    width: 100%;
    display: flex;
    align-items: center;
    img {
      margin: 0 20 / @vw;
      width: 70 / @vw;
      height: 70 / @vw;
    }
  }
  .info {
    display: flex;
    margin-bottom: 30 / @vw;
    font-size: 26 / @vw;
    line-height: 40 / @vw;
    align-items: center;
    .num {
      flex: 1;
      display: flex;
      height: 80 / @vw;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      border-right: 1px solid #ccc;
    }
    .appraise {
      flex: 1;
      display: flex;
      flex-direction: column;
      line-height: 48 / @vw;
      .item {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          display: inline-block;
          margin-left: 5 / @vw;
        }
        .text {
          width: 30%;
        }
        .score {
          width: 20%;
        }

        .isbetter {
          width: 28 / @vw;
          height: 28 / @vw;
          text-align: center;
          line-height: 28 / @vw;
          color: white;
        }
      }
    }
  }
  .go {
    width: 300 / @vw;
    height: 60 / @vw;
    margin: 0 auto;
    text-align: center;
    font-size: 28 / @vw;
    line-height: 60 / @vw;
    border-radius: 40 / @vw;
    color: rgb(123, 117, 117);
    background-color: #f5f6fb;
  }
}
.better {
  background-color: red;
}
.low {
  background-color: green;
}
</style>
