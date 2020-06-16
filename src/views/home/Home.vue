<template>
  <div id="home">
    <!-- 导航栏 -->
    <Nav-bar class="home-navbar">
      <template #center>购物街</template>
    </Nav-bar>
    <!-- 导航栏结束 -->
    <!-- 选项卡2 -->
    <Bar-control
      :title="['流行', '新款', '精选']"
      @tabClick="tabClick"
      v-show="isFixed"
      class="tabcontrol2"
      ref="tabcontrol2"
    />
    <!-- 选项卡2结束 -->
    <Scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      @scroll="scroll"
      :pull-up-load="true"
      @pullup="loadMore"
    >
      <!-- 轮播图 -->
      <Carrousel :banner="banner" @imageLoad="imageLoad"></Carrousel>
      <!-- 轮播图结束 -->
      <!-- 推荐 -->
      <Recomend :recomend="recommend" @recomendLoad="recommendLoad"></Recomend>
      <!-- 推荐结束 -->
      <!-- 流行 -->
      <Feture></Feture>
      <!-- 流行结束 -->
      <!-- 选项卡 -->
      <Bar-control :title="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabcontrol" />
      <!-- 选项卡结束 -->
      <!-- 商品列表 -->
      <Goods-list :goods="changeGoodsList" />
      <!-- 商品列表结束 -->
    </Scroll>
    <!-- 返回顶部 -->
    <Totop @click.native="scrollTo" v-show="isShowToTop"></Totop>
    <!-- 返回顶部结束 -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Carrousel from "components/common/carrousel/Carrousel";
import BarControl from "components/content/barcontrol/BarControl";
import GoodsList from "components/content/goodsList/GoodsList";
import Totop from "components/content/totop/Totop";

import Recomend from "./childComponents/recomend";
import Feture from "./childComponents/feture";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Home",
  components: {
    NavBar,
    Carrousel,
    BarControl,
    Recomend,
    Feture,
    GoodsList,
    Totop,
    Scroll
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowToTop: false,
      tabControlTop: 0,
      isFixed: false
    };
  },
  created() {
    //首页数据
    this.getHomeMultidata();
    //选项卡
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    changeGoodsList() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    // 监听选项卡点击事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol2.currentIndex = index;
      this.$refs.tabcontrol.currentIndex = index;
    },
    // 首页数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    // 选项卡数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
    // 返回顶部
    scrollTo() {
      this.$refs.scroll.scrollTo(0, 0, 600);
    },
    // 监听滚动组件的滚动事件
    scroll(position) {
      // 判断滚动距离是否大于1000
      this.isShowToTop = -position.y > 600 ? true : false;
      this.isFixed = -position.y > this.tabControlTop ? true : false;
    },
    // 监听子组件上拉加载事件
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    // 监听轮播图加载完成
    imageLoad() {
      this.tabControlTop = this.$refs.tabcontrol.$el.offsetTop;
    },
    // 监听推荐图加载完成
    recommendLoad() {
      this.tabControlTop = this.$refs.tabcontrol.$el.offsetTop;
    }
  },
  updated() {
    this.$refs.scroll.bscroll.refresh();
  }
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
#home {
  height: 100vh;
  // position: relative;
  // padding-bottom: 100 / @vw;
  .scroll {
    position: absolute;
    top: 80 / @vw;
    bottom: 100 / @vw;
    left: 0;
    right: 0;
    overflow: hidden;
    // height: (100% - 100 / @vw);
  }
}
.home-navbar {
  width: 100%;
  color: white;
  background-color: rgb(236, 149, 162);
}
.tabcontrol2 {
  position: relative;
  z-index: 9;
}
</style>
