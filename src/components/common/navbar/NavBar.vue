<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: "NavBar"
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
    .nav-bar{
        display:flex;
        height: 80 / @vw;
        line-height: 80 / @vw;
        text-align: center;
        box-shadow: 0 2px 2px rgba(228, 228, 228, .6);
    }
    .left {
        width: 120 / @vw;
    }
    .center{
        flex: 1;
    }
    .right {
        width: 120 / @vw;
    }
</style>
