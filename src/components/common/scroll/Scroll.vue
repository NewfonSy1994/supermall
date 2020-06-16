<template>
  <div class="scroll" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bscroll: null
    };
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.scroll, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 监听滚动 将滚动值传出去
    this.bscroll.on('scroll', (position) => {
      this.$emit('scroll', position);
    });
    // 上拉加载更多
    this.bscroll.on('pullingUp', () => {
        this.$emit('pullup')
    })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.bscroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bscroll.finishPullUp();
    }
  }
};
</script>

<style lang='stylus' scoped></style>
