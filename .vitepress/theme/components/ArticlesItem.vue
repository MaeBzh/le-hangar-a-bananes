<template>
  <div class="text-center border border-gray-900 dark:border-white rounded-xl">
    <VPImage v-if="image" :image="image" class="w-full h-[180px] rounded-t-xl" />
    <div class="p-5">
      <p class="mb-2 text-xs font-semibold tracking-wide uppercase">
        {{
          date.toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
      </p>
      <a
        href="/"
        class="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
        aria-label="Read article"
        title="Nori grape silver beet broccoli kombu beet"
      >
        {{ title }}
      </a>

      <p class="mb-2 text-justify">
        {{ truncatedDescription }}
      </p>

      <VPButton
        :href="link"
        size="big"
        rounded
        theme="alt"
        aria-label="Lire l'article"
        text="Lire l'article"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { DefaultTheme } from "vitepress";
import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";
import { defineComponent, PropType } from "vue";
import VPButton from "./VPButton.vue";

export default defineComponent({
  name: "LastArticlesItem",
  components: {VPImage},
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    image: {
      type: Object as PropType<DefaultTheme.ThemeableImage>,
      required: false,
    },
  },
  computed: {
    truncatedDescription() {
      return this.description.length > 150
        ? this.description.substring(0, 150) + "..."
        : this.description;
    },
  },
  components: {
    VPButton,
    VPImage
},
});
</script>
