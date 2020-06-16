<template>
  <div class="goods-list">
      <Goods-item v-for="(item,index) in goods" :key="index" :goodsitem="item"></Goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem"
export default {
    name: "GoodsList",
    props:{
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodsItem
    }
}
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.goods-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
