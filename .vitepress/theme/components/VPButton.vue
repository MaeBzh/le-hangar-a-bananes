<script lang="ts">
import { defineComponent } from "vue";
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils.js'
import { EXTERNAL_URL_RE } from "vitepress/dist/client/shared";

export default defineComponent({
  name: "VPButton",
  props: {
    tag: {
      type: String,
      default: undefined,
    },
    size: {
      type: String,
      default: "medium",
    },
    theme: {
      type: String,
      default: "brand",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    isExternal() {
      return this.href && EXTERNAL_URL_RE.test(this.href);
    },
    component() {
      if (this.tag) {
        return this.tag;
      }

      return this.href ? "a" : "button";
    },
  },
  methods: {
    normalizeLink,
  },
});
</script>

<template>
  <component
    :is="component"
    class="VPButton inline-block font-medium uppercase rounded border-2 shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
    :class="{
      'px-4 py-1.5 text-xs leading-tight': size === 'small',
      'px-6 py-2.5 text-xs leading-tight': size === 'medium',
      'px-7 py-3 text-sm leading-snug': size === 'big',

      'rounded-full': rounded,

      'w-full': block,

      'border-[var(--vp-button-brand-border)] text-[var(--vp-button-brand-text)] bg-[var(--vp-button-brand-bg)] hover:border-[var(--vp-button-brand-hover-border)] hover:text-[var(--vp-button-brand-hover-text)] hover:bg-[var(--vp-button-brand-hover-bg)] active:border-[var(--vp-button-brand-active-border)] active:text-[var(--vp-button-brand-active-text)] active:bg-[var(--vp-button-brand-active-bg)]': theme === 'brand',
      'border-[var(--vp-button-alt-border)] text-[var(--vp-button-alt-text)] dark:text-white bg-[var(--vp-button-alt-bg)] hover:border-[var(--vp-button-alt-hover-border)] hover:text-[var(--vp-button-alt-hover-text)] hover:bg-[var(--vp-button-alt-hover-bg)] active:border-[var(--vp-button-alt-active-border)] active:text-[var(--vp-button-alt-active-text)] active:bg-[var(--vp-button-alt-active-bg)]' : theme === 'alt',
      'border-[var(--vp-button-sponsor-border)] text-[var(--vp-button-sponsor-text)] dark:text-white bg-[var(--vp-button-sponsor-bg)] hover:border-[var(--vp-button-sponsor-hover-border)] hover:text-[var(--vp-button-sponsor-hover-text)] hover:bg-[var(--vp-button-sponsor-hover-bg)] active:border-[var(--vp-button-sponsor-active-border)] active:text-[var(--vp-button-sponsor-active-text)] active:bg-[var(--vp-button-sponsor-active-bg)]' : theme === 'sponsor',
      
      'pointer-events-none opacity-60': disabled,
    }"
    :href="href ? normalizeLink(href) : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noreferrer' : undefined"
  >
    <slot>{{ text }}</slot>
  </component>
</template>