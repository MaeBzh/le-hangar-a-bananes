<template>
  <a v-if="clickable" :href="src" target="_blank" :class="$attrs.class">
    <VPImage
      :image="{ src, alt }"
      class="object-scale-down px-8 m-auto w-auto h-auto max-h-96"
    />
    <small class="block text-center text-gray-500 dark:text-gray-300">
      <slot>{{ alt }}</slot>
    </small>
  </a>

  <div :class="$attrs.class" v-else>
    <VPImage
      :image="{ src, alt }"
      class="object-scale-down px-8 m-auto w-auto h-auto max-h-96"
    />
    <small class="block text-center text-gray-500 dark:text-gray-300">
      <slot>{{ alt }}</slot>
    </small>
  </div>
</template>

<script lang="ts">
import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Image",
  components: { VPImage },
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    clickable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>
