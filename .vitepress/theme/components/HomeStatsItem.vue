<template>
  <div class="border rounded-xl py- lg:py-12">
    <h5 class="text-3xl font-bold text-gray-100">
      {{ value }}
    </h5>
    <p class="text-xs font-medium tracking-wide uppercase text-gray-200">
      {{ title }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeStatsItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
});
</script>
