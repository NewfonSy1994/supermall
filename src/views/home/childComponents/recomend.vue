<template>
  <div class="recomendBox">
    <a :href="item.link" class="link" v-for="(item,index) in recomend" :key="index">
      <img :src="item.image" alt @load="recomendLoad"/>
      <div class="text">{{item.title}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Recomend",
  props: {
    recomend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    recomendLoad() {
      this.$emit("recomendLoad")
    }
  },
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.recomendBox {
  width: 750 / @vw;
  display: flex;
  .link {
      text-decoration: none;
      text-align: center;
      color: black;
      font-size: 20/ @vw;
      flex: 1;
      padding: 20 / @vw 0;
      border-bottom: 18 / @vw solid #f0f0f0;
      img {
          width: 140 / @vw;
          margin-bottom: 20 / @vw;
      }
  }
}
</style>
