<template>
  <Nav-bar class="detail-navbar">
    <template #left>
      <div class="back" @click="back">
        <img src="~assets/img/navbar/back.png" alt />
      </div>
    </template>
    <template #center>
      <div class="item-box">
        <div class="detail-navbar-item" v-for="(item,index) in barList" 
        :key="index"
        @click="activeItem(index)"
        :class="{active: currentIndex == index}">{{item}}</div>
      </div>
    </template>
  </Nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavbar",
  components: {
    NavBar
  },
  data() {
    return {
      barList: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
      activeItem(index) {
          this.currentIndex = index;
      },
      back() {
          this.$router.go(-1);
      }
  }
};
</script>

<style lang='less' scoped>
@vw: 7.5vw;
.back {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width:50 / @vw;
        height:50 / @vw;
    }
}
.item-box {
  display: flex;
  .detail-navbar-item {
    flex: 1;
  }
}
.active {
  color: #e099a3;
}
</style>
