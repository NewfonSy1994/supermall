<template>
  <div class="shop-show">
      <img :src="item" alt="" v-for="(item,index) in shopImages" :key="index" @load="imageLoad" />
  </div>
</template>

<script>
export default {
    name: "DetailShopShow",
    props: {
        shopImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        imageLoad() {
            if(++this.counter === this.shopImages.length) {
                this.$emit('imagesload')
            }
        }
    }
}
</script>

<style lang='less' scoped>
img{
    width: 100%;
}
</style>
