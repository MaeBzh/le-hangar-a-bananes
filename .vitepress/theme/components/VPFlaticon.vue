<script setup lang="ts">
import type { DefaultTheme } from "vitepress/theme";
import { withBase } from "vitepress";

defineProps<{
  flaticon: DefaultTheme.ThemeableImage;
  alt?: string;
}>();
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <template v-if="flaticon">
    <img
      v-if="typeof flaticon === 'string' || 'src' in flaticon"
      class="VPFlaticon"
      v-bind="
        typeof flaticon === 'string' ? $attrs : { ...flaticon, ...$attrs }
      "
      :src="withBase(typeof flaticon === 'string' ? flaticon : flaticon.src)"
      :alt="alt ?? (typeof flaticon === 'string' ? '' : flaticon.alt || '')"
    />
    <template v-else>
      <VPFlaticon
        class="dark"
        :flaticon="flaticon.dark"
        :alt="flaticon.alt"
        v-bind="$attrs"
      />
      <VPFlaticon
        class="light"
        :flaticon="flaticon.light"
        :alt="flaticon.alt"
        v-bind="$attrs"
      />
    </template>
  </template>
</template>

<style scoped>
.VPFlaticon {
  width: 36px;
  height: 36px;
  margin-right: 10px;
}

@media (min-width: 768px) {
  h1 .VPFlaticon {
    width: 56px;
    height: 56px;
  }

  h2 .VPFlaticon {
    width: 42px;
    height: 42px;
  }
}

html:not(.dark) .VPFlaticon.dark {
  display: none;
}
.dark .VPFlaticon.light {
  display: none;
}
</style>
