<template>
  <div
    class="Card flex flex-col p-4 rounded-xl shadow-lg border border-white bg-white mb-8"
  >
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.Card h2 {
  display: block;
  margin: 0;
  border: 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
  padding: 0;
  padding-bottom: 1rem;
  text-align: center;
}
</style>
