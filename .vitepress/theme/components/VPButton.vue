<script setup lang="ts">
import { computed } from "vue";
import { normalizeLink } from "vitepress/dist/client/theme-default/support/utils.js";
import { EXTERNAL_URL_RE } from "vitepress/dist/client/shared.js";

const props = defineProps<{
  tag?: string;
  size?: "medium" | "big";
  theme?: "brand" | "alt" | "sponsor";
  text: string;
  href?: string;
}>();

const size = computed(() => {
  return props.size ?? "medium";
});

const theme = computed(() => {
  return props.theme ?? "brand";
});

const isExternal = computed(
  () => props.href && EXTERNAL_URL_RE.test(props.href)
);

const component = computed(() => {
  if (props.tag) {
    return props.tag;
  }

  return props.href ? "a" : "button";
});
</script>

<template>
  <component
    :is="component"
    class="VPButton inline-block bg-blue-600 text-white font-medium uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    :class="{
      'px-4 py-1.5 text-xs leading-tight': size !== 'medium' && size !== 'big',
      'px-6 py-2.5 text-xs leading-tight': size === 'medium',
      'px-7 py-3 text-sm leading-snug': size === 'big',

      'border-[color:var(--vp-button-brand-border)] text-[color:var(--vp-button-brand-text)] bg-[var(--vp-button-brand-bg)]':
        theme === 'brand',
      'hover:border-[color:var(--vp-button-brand-hover-border)] hover:text-[color:var(--vp-button-brand-hover-text)] hover:bg-[var(--vp-button-brand-hover-bg)]':
        theme === 'brand',
      'active:border-[color:var(--vp-button-brand-active-border)] active:text-[color:var(--vp-button-brand-active-text)] active:bg-[var(--vp-button-brand-active-bg)]':
        theme === 'brand',

      'border-[color:var(--vp-button-alt-border)] text-[color:var(--vp-button-alt-text)] bg-[var(--vp-button-alt-bg)]':
        theme === 'alt',
      'hover:border-[color:var(--vp-button-alt-hover-border)] hover:text-[color:var(--vp-button-alt-hover-text)] hover:bg-[var(--vp-button-alt-hover-bg)]':
        theme === 'alt',
      'active:border-[color:var(--vp-button-alt-active-border)] active:text-[color:var(--vp-button-alt-active-text)] active:bg-[var(--vp-button-alt-active-bg)]':
        theme === 'alt',

      'border-[color:var(--vp-button-sponsor-border)] text-[color:var(--vp-button-sponsor-text)] bg-[var(--vp-button-sponsor-bg)]':
        theme === 'sponsor',
      'hover:border-[color:var(--vp-button-sponsor-hover-border)] hover:text-[color:var(--vp-button-sponsor-hover-text)] hover:bg-[var(--vp-button-sponsor-hover-bg)]':
        theme === 'sponsor',
      'active:border-[color:var(--vp-button-sponsor-active-border)] active:text-[color:var(--vp-button-sponsor-active-text)] active:bg-[var(--vp-button-sponsor-active-bg)]':
        theme === 'sponsor',
    }"
    :href="href ? normalizeLink(href) : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noreferrer' : undefined"
  >
    {{ text }}
  </component>
</template>
