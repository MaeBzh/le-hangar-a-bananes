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
        <VPImage
          :image="image"
          :key="index"
          className="object-fill w-auto h-96 m-auto cursor-pointer"
          @click="openTab(image)"
        />
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

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { withBase } from "vitepress";

export default {
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
  methods: {
    openTab(image) {
      window.open(withBase(image.src), "_blank");
    },
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
