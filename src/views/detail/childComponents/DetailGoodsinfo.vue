<template>
  <div v-if="Object.keys(goods).length !== 0" class="goods-info">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span class="sellNum">{{goods.columns[0]}}</span>
      <span class="collectNum">{{goods.columns[1]}}</span>
      <span class="serve">{{goods.services[2].name}}</span>
    </div>
    <div class="services">
      <div class="services-left">
        <img :src="goods.services[0].icon" alt />
        <span>{{goods.services[0].name}}</span>
      </div>
      <div class="services-right">
        <img :src="goods.services[1].icon" alt />
        <span>{{goods.services[1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goods: Object,
    default() {
      return {}
    }
  }
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.goods-info {
  margin-top: 20 / @vw;
  padding: 0 10 / @vw;
  text-align: justify;
  .title {
    font-size: 32 / @vw;
    line-height: 40 / @vw;
  }
  .price {
    display: flex;
    align-items: center;
    margin: 20 / @vw 0;
    .newPrice {
      font-size: 40 / @vw;
      color: #e099a3;
    }
    .oldPrice {
      font-size: 30 / @vw;
      text-decoration: line-through;
      margin: 0 20 / @vw;
    }
    .discount {
      display: inline-block;
      padding: 3 / @vw 5 / @vw; 
      background-color: #c26672;
      font-size: 26 / @vw;
      border-radius: 20 / @vw;
      color: #fff;
    }
  }
  .columns {
    height: 80 / @vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    font-size: 26 / @vw;
    color: #ccc;
  }
  .services {
    height: 120 / @vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26 / @vw;
    div {
      display: flex;
      align-items: center;
      img {
        width: 30 / @vw;
      }
    }
  }
}
</style>
