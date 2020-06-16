<template>
  <div class="swiperBox">
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
      <swiper-slide v-for="(item,index) in detailBanner" :key="index" class="swiperSlide">
          <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Carrousel",
  props: {
    detailBanner: Array
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        initialSlide: 0,
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
@vw: 7.5vw;
img {
  width: 100%;
}
.swiperBox {
  width: 750 / @vw;
  height: 800 / @vw;
  .swiper {
    width: 100%;
    height: 100%;
    a {
      display: inline-block;
      width: 100%;
    }
  }
}
</style>