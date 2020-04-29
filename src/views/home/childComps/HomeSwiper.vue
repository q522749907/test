<template>
  <div class="homeSwiper">
    <swiper>
      <swiper-slide class="swiper-slide" v-for="banner in swiperbanners" >
        <a :href="banner.link">
          <img :src="banner.image">
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    name: "HomeSwiper",
    props:{
      swiperbanners:Array
    },
    components:{
      /*swiper,
      swiperSlide*/
    }

  }
</script>

<style scoped>
  .swiper-slide {
    width: 100%;
  }
</style>
