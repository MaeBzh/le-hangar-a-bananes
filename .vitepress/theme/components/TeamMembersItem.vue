<template>
  <div
    class="px-6 py-4 transition-colors duration-300 transform border border-bl rounded-xl group"
  >
    <div class="flex flex-col sm:-mx-4 sm:flex-row">
      <img
        class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
        :src="member.avatar"
        :alt="`Photo de ${member.name}`"
      />
      <div class="mt-4 sm:mx-4 sm:mt-0">
        <h1 class="text-xl font-semibold capitalize md:text-2xl">
          {{ member.name }}
        </h1>
        <p v-if="member.title" class="mt-2">
          {{ member.title }}
        </p>
      </div>
    </div>
    <p class="mt-4" v-html="member.desc" />
  </div>
</template>

<script lang="ts">
import { DefaultTheme } from "vitepress";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    member: {
      type: Object as () => DefaultTheme.TeamMember,
      required: true,
    },
  },
});
</script>
