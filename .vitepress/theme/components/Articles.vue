<template>
  <section
    class="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2
        class="flex justify-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </h2>
    </div>
    <div
      class="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full"
    >
      <ArticlesItem
        v-for="({ title, publishedAt, description, image, link }, index) in articles"
        :key="index"
        :date="publishedAt"
        :title="title"
        :description="description"
        :link="link"
        :image="image"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArticlesItem from "./ArticlesItem.vue";
import VPButton from "./VPButton.vue";
import type { Article } from "../types";
import { DefaultTheme } from "vitepress";
import Flaticon from "./Flaticon.vue";

export default defineComponent({
  name: "Articles",
  props: {
    title: {
      type: String,
      required: false,
    },
    icon: {
      type: Object as () => DefaultTheme.ThemeableImage,
      required: false,
    },
    articles: {
      type: Array<Article>,
      required: true,
    },
  },
  components: {
    ArticlesItem,
    VPButton,
    Flaticon,
  },
});
</script>
