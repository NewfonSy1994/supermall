<template>
  <div class="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 750 / @vw;
  height: 100 / @vw;
  background-color: rgb(243, 243, 243);
  display: flex;
  color: gray;
  z-index:9;
}
</style>
