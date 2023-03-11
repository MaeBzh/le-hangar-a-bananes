<template>
  <div class="my-4">
    <swiper
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(image, index) in images">
        <a :href="image.src" target="_blank" rel="noopener noreferrer">
          <VPImage
            :image="image"
            :key="index"
            className="object-fill w-auto h-96 m-auto cursor-pointer"
          />
        </a>
        <small class="block mt-2 text-center text-gray-500 dark:text-gray-300">
          {{ image.alt }}
        </small>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

export default {
  name: "Carousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style>
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: var(--swiper-pagination-bottom, 14px) !important;
}
</style>
