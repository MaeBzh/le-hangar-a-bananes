<template>
  <section class="bg-[var(--vp-c-brand-darker)]">
    <div
      class="container grid grid-cols-2 gap-4 lg:gap-12 p-6 mx-auto text-center md:grid-cols-4"
    >
      <HomeStatsItem
        v-for="({ title, value }, index) in stats"
        :key="index"
        :title="title"
        :value="value"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeStatsItem from "./HomeStatsItem.vue";

export default defineComponent({
  name: "HomeStats",
  props: {
    stats: {
      type: Array<{ title: string; value: number }>,
      required: true,
    },
  },
  components: { HomeStatsItem },
});
</script>
