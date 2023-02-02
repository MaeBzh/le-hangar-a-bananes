<template>
  <div class="p-5 lg:p-10 text-center border border-gray-900 dark:border-white rounded">
    <p class="mb-2 text-xs font-semibold tracking-wide uppercase">
      {{ date }}
    </p>
    <a
      href="/"
      class="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
      aria-label="Read article"
      title="Nori grape silver beet broccoli kombu beet"
    >
      {{ title }}
    </a>
    <p class="max-w-xs mx-auto mb-2">
      {{ description }}
    </p>

    <VPButton
      :href="link"
      size="small"
      rounded
      theme="alt"
      aria-label="Read article"
      title="Nori grape silver beet broccoli kombu beet"
      text="Read article"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VPButton from "./VPButton.vue";

export default defineComponent({
  name: "LastArticlesItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
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
  },
  components: {
    VPButton,
  },
});
</script>
