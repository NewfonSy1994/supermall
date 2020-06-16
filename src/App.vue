<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <My-tabbar />
  </div>
</template>

<script>
import MyTabbar from "components/content/mytabbar/MyTabbar";
export default {
  name: "App",
  components: {
    MyTabbar
  }
};
</script>
<style lang="less">
@import "~assets/css/base.css";

</style>
