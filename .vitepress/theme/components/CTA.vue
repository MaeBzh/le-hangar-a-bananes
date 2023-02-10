<template>
  <div
    class="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
  >
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <slot name="image" />
        </div>

        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CTA",
});
</script>
