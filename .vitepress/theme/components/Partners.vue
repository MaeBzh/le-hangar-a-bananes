<template>
  <div class="grid p-12 grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
    <VPLink
      v-for="(partner, index) in partners"
      :key="index"
      class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1"
      :href="partner.link"
      no-icon
    >
      <VPImage
        class="scale-90 hover:scale-100 ease-in duration-300"
        :image="partner.image"
        :alt="partner.title"
      />
    </VPLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Partner } from "../types";
import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue";

export default defineComponent({
  name: "Partners",
  components: {
    VPImage,
    VPLink,
  },
  props: {
    partners: {
      type: Array<Partner>,
      required: true,
    },
  },
});
</script>
