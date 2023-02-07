<template>
  <div
    class="p-5 lg:p-10 text-center border border-gray-900 dark:border-white rounded"
  >
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
      size="small"
      rounded
      theme="alt"
      aria-label="Lire l'article"
      text="Lire l'article"
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
  },
  computed: {
    truncatedDescription() {
      return this.description.substring(0, 100) + "...";
    },
  },
  components: {
    VPButton,
  },
});
</script>
