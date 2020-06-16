<template>
  <div class="tabbar-item" @click="tabbarItemClick">
    <div v-if="!isActive">
      <slot name="tabbar-item-image"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-item-image-active"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="tabbar-item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "black"
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveColor() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    tabbarItemClick() {
      if (this.$route.path == this.path) {
        return;
      }
      this.$router.replace(this.path);
    }
  }
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.tabbar-item {
  text-align: center;
  flex: 1;
  img {
    width: 52 / @vw;
    height: 52 / @vw;
    margin-top: 5 / @vw;
    vertical-align: middle;
  }
}
</style>
