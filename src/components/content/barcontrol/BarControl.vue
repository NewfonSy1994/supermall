<template>
  <div class="tabbar">
    <ul>
      <li v-for="(item,index) in title" :key="index" @click="changeTabbar(index)">
        <span :class="{active:index == currentIndex}">{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BarControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    changeTabbar(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  }
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.tabbar {
  // position: sticky;
  // top: 80 / @vw;
  width: 100%;
  height: 80 / @vw;
  background-color: #fff;
  // z-index:1;
  ul {
    display: flex;
    list-style: none;
    li {
      flex: 1;
      text-align: center;
      span {
        display: inline-block;
        height: 60 / @vw;
        line-height: 60 / @vw;
        padding: 0 10 / @vw;
        font-size: 30 / @vw;
      }
    }
  }
}
.active {
  color: #e099a3;
  border-bottom: 2px solid #e099a3;
}
</style>
