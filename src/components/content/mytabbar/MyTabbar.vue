<template>
  <div>
    <Tabbar>
      <TabbarItem path="/home">
        <img slot="tabbar-item-image" src="~assets/img/tabbar/shouye_1.png" alt />
        <img slot="tabbar-item-image-active" src="~assets/img/tabbar/shouye.png" alt />
        <div slot="tabbar-item-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category">
        <img slot="tabbar-item-image" src="~assets/img/tabbar/fenlei-weixuanzhong.png" alt />
        <img
          slot="tabbar-item-image-active"
          src="~assets/img/tabbar/fenlei-xuanzhong.png"
          alt
        />
        <div slot="tabbar-item-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart">
        <img slot="tabbar-item-image" src="~assets/img/tabbar/gouwuchekong.png" alt />
        <img slot="tabbar-item-image-active" src="~assets/img/tabbar/gouwucheman.png" alt />
        <div slot="tabbar-item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile">
        <img slot="tabbar-item-image" src="~assets/img/tabbar/wode.png" alt />
        <img slot="tabbar-item-image-active" src="~assets/img/tabbar/wode_1.png" alt />
        <div slot="tabbar-item-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
    name: "MyTabbar",
    components: {
        Tabbar,
        TabbarItem
    }
};
</script>

<style lang='stylus' scoped></style>
