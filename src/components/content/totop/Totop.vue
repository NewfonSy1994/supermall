<template>
  <div class="toTopBox">
    <div class="toTop">
      <img src="~assets/img/home/toTop.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Totop"
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.toTop {
  position: fixed;
  right: 10 / @vw;
  bottom: 120 / @vw;
  z-index: 10;
  img {
    width: 84 / @vw;
    height: 84 / @vw;
  }
}
</style>
