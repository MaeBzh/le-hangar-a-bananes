<script lang="ts" setup>
import { computed } from "vue";
import { useData } from "vitepress";

const { isDark } = useData();

const dark = computed(() => {
  return isDark.value;
});
</script>

<template>
  <button
    class="VPSwitch relative rounded-[11px] block w-[40px] h-[22px] flex-shrink-0 border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg-mute)] transition-[border-color] duration-[250ms] hover:border-[var(--vp-c-gray)]"
    type="button"
    role="switch"
  >
    <span
      class="absolute top-[1px] left-[1px] w-[18px] h-[18px] rounded-[50%] bg-[var(--vp-c-white)] shadow-[var(--vp-shadow-1)] transition-[transform] duration-[250ms]"
      :class="{ 'bg-[var(--vp-c-black)]': dark }"
    >
      <span
        class="icon relative block w-[18px] h-[18px] rounded-[50%] overflow-hidden [:deep(svg)]:absolute [:deep(svg)]:top-[3px] [:deep(svg)]:left-[3px] [:deep(svg)]:w-[12px] [:deep(svg)]:h-[12px]"
        :class="[
          dark
            ? '[:deep(svg)]:fill-[var(--vp-c-text-1)] [:deep(svg)]:transition-[opacity] [:deep(svg)]:duration-[250ms]'
            : '[:deep(svg)]:fill-[var(--vp-c-text-2)]',
        ]"
        v-if="$slots.default"
      >
        <slot />
      </span>
    </span>
  </button>
</template>
