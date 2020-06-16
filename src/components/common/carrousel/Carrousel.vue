<template>
  <div class="swiperBox">
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
      <swiper-slide v-for="(item,index) in banner" :key="index" class="swiperSlide">
        <a :href="item.link">
          <img :src="item.image" alt @load="imageLoad" />
        </a>
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
    banner: Array
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        initialSlide: 0,
        pagination: {
          el: ".swiper-pagination"
        },
        isLoad: false
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
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("imageLoad");
      }
      this.isLoad = true;
    }
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
  height: 400 / @vw;
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