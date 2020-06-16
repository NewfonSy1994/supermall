<template>
  <div class="detailBox">
    <Detail-navbar class="navBar" />
   
    <Scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      @scroll="scroll"
    >
      <Detail-carrousel :detailBanner="detailBanner" />
      <Detail-goods-info :goods="goods" />
      <Detail-shop-info :shops="shops" />
      <Detail-shop-show :shopImages="shopImages" @imagesload="imagesLoad"></Detail-shop-show>
    </Scroll>
    <Totop @click.native="scrollTo" v-show="isShowToTop"></Totop>
    <Bottom-bar @addToCart="addToCart"></Bottom-bar>
  </div>
</template>

<script>
import DetailNavbar from "./childComponents/DetailNavbar";
import DetailCarrousel from "./childComponents/DetailCarrousle";
import DetailGoodsInfo from "./childComponents/DetailGoodsinfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailShopShow from "./childComponents/DetailShopShow";
import BottomBar from "./childComponents/BottomBar";

import Scroll from "components/common/scroll/Scroll";
import Totop from "components/content/totop/Totop";

import { detailBannerRequest, Goods, Shops } from "network/detail";

import { backTopMixin } from "common/mixin";
export default {
  name: "Detail",
  components: {
    DetailNavbar,
    DetailCarrousel,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailShopShow,
    BottomBar,
    Totop,
    Scroll
  },
  data() {
    return {
      iid: null,
      detailBanner: [],
      goods: {},
      shops: {},
      shopImages: []
    };
  },
  mixins: [backTopMixin],
  mounted() {
    this.iid = this.$route.params.iid;
    detailBannerRequest(this.iid).then(res => {
      const data = res.data.result;
      this.detailBanner = data.itemInfo.topImages;
      // 获取商品详情数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shops = new Shops(data.shopInfo);

      this.shopImages = data.detailInfo.detailImage[0].list;
    });
  },
  methods: {
    imagesLoad() {
      this.$refs.scroll.bscroll.refresh();
    },
    addToCart() {
      const myShop = {};
      myShop.topImage = this.shopImages[0];
      myShop.price = this.goods.realPrice;
      myShop.title = this.goods.title;
      myShop.desc = this.goods.desc;
      myShop.iid = this.iid;
      this.$store.dispatch("addCart", myShop);
    }
  }
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.detailBox {
  position: relative;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 10;
  height: 100vh;
  .navBar {
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .scroll {
    position: absolute;
    top: 80 / @vw;
    bottom: 100 / @vw;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
</style>
