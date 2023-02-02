<template>
  <!-- component -->
  <div
    class="Product relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white mb-8"
  >
    <div class="w-full md:w-1/3 bg-white grid place-items-center">
      <VPImage :image="product.image" class="rounded-xl" />
    </div>
    <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
      <div class="flex justify-between item-center">
        <h3 class="font-black text-gray-800 md:text-3xl text-xl m-0">
          {{ product.title }}
        </h3>
        <div
          v-if="product.stars"
          class="text-xs font-medium hidden md:block"
        >
          <template v-for="n in product.stars" :key="n">❤️</template>
        </div>
      </div>

      <p class="text-gray-500 text-base" v-html="product.description" />
      <VPButton
        v-if="product.btn"
        :href="product.btn.href"
        :text="product.btn.text"
      />
    </div>
  </div>
</template>

<script lang="ts">
import type { Product } from "../types";
import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";
import { defineComponent } from "vue";
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue";

export default defineComponent({
  name: "ProductItem",
  components: {
    VPImage,
    VPButton,
  },
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
});
</script>

<style scoped>
.Product h3 {
  margin: 0;
}
</style>
