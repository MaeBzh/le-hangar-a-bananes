<template>
  <div class="border rounded-xl py- lg:py-12">
    <h5 class="text-5xl font-bold text-white">
       {{ value }}
    </h5>
    <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
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
