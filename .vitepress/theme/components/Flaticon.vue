<template>
  <template v-if="icon">
    <img
      v-if="typeof icon === 'string' || 'src' in icon"
      class="Flaticon"
      v-bind="typeof icon === 'string' ? $attrs : { ...icon, ...$attrs }"
      :src="withBase(typeof icon === 'string' ? icon : icon.src)"
      :alt="alt ?? (typeof icon === 'string' ? '' : icon.alt || '')"
    />
    <template v-else>
      <Flaticon
        class="dark"
        :flaticon="icon.dark"
        :alt="icon.alt"
        v-bind="$attrs"
      />
      <Flaticon
        class="light"
        :flaticon="icon.light"
        :alt="icon.alt"
        v-bind="$attrs"
      />
    </template>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { withBase } from "vitepress";
import type { DefaultTheme } from "vitepress";

export default defineComponent({
  name: "Flaticon",
  props: {
    icon: {
      type: [String, Object] as PropType<string | DefaultTheme.ThemeableImage>,
      required: true,
    },
    alt: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    return {
      withBase,
    };
  },
});
</script>

<style scoped>
.Flaticon {
  width: 36px;
  height: 36px;
  margin-right: 10px;
}

@media (min-width: 768px) {
  h1 .Flaticon {
    width: 56px;
    height: 56px;
  }

  h2 .Flaticon {
    width: 42px;
    height: 42px;
  }
}

html:not(.dark) .Flaticon.dark {
  display: none;
}
.dark .Flaticon.light {
  display: none;
}
</style>
