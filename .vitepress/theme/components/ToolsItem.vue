<template>
  <!-- component -->
  <div
    class="Tool relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg max-w-xs md:max-w-3xl mx-auto border mb-8"
  >
    <div class="w-full md:w-1/3 bg-white dark:bg-gray-100 grid place-items-center rounded-tl-xl rounded-tr-xl sm:rounded-tr-none md:rounded-bl-xl p-1">
      <VPImage :image="tool.image" />
    </div>
    <div class="w-full md:w-2/3 flex flex-col space-y-2 p-3">
      <div class="flex justify-between item-center">
        <h3 class="font-black text-gray-800 dark:text-gray-100 md:text-3xl text-xl m-0">
          {{ tool.title }}
        </h3>
        <div v-if="tool.stars" class="text-xs font-medium hidden md:block">
          <template v-for="n in tool.stars" :key="n">❤️</template>
        </div>
      </div>

      <p class="text-gray-500 dark:text-gray-300 text-base" v-html="tool.description" />
      <VPButton v-if="tool.btn" :href="tool.btn.href" :text="tool.btn.text" />
    </div>
  </div>
</template>

<script lang="ts">
import type { Tool } from "../types";
import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";
import { defineComponent } from "vue";
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue";

export default defineComponent({
  name: "toolItem",
  components: {
    VPImage,
    VPButton,
  },
  props: {
    tool: {
      type: Object as () => Tool,
      required: true,
    },
  },
});
</script>

<style scoped>
.Tool h3 {
  margin: 0;
}
</style>
