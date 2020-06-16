<template>
  <div class="goods-item" @click="toDetail">
    <a>
      <img :src="goodsitem.show.img" alt />
      <div class="text">
        <p class="title">{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.price}}</span>
        <span>&</span>
        <span>{{goodsitem.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    toDetail() {
      this.$router.push('/detail/' + this.goodsitem.iid)
    }
  }
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.goods-item {
  width: 48%;
  a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: black;
    img {
      width: 100%;
      border-radius: 16 / @vw;
    }
    .text {
      padding: 10 / @vw 10 / @vw;
      text-align: center;
      font-size: 20 / @vw;
      line-height: 40 / @vw;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
