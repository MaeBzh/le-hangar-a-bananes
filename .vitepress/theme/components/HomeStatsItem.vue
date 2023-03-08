<template>
  <div class="border rounded-xl lg:py-12">
    <h5 class="text-lg md:text-xl font-bold text-gray-100">
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
      type: [String, Number],
      required: true,
    },
  },
});
</script>
