<script lang="ts" setup>
import { ref, onMounted, watch, computed } from "vue";
import { useData } from "vitepress";
import { APPEARANCE_KEY } from "vitepress/dist/client/shared.js";
import VPSwitch from "./VPSwitch.tw.vue";
import VPIconSun from "./icons/VPIconSun.vue";
import VPIconMoon from "./icons/VPIconMoon.vue";

const { site, isDark } = useData();
const checked = ref(false);
const toggle = typeof localStorage !== "undefined" ? useAppearance() : () => {};

onMounted(() => {
  checked.value = document.documentElement.classList.contains("dark");
});

function useAppearance() {
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  const classList = document.documentElement.classList;

  let userPreference = localStorage.getItem(APPEARANCE_KEY);

  let isDark =
    (site.value.appearance === "dark" && userPreference == null) ||
    (userPreference === "auto" || userPreference == null
      ? query.matches
      : userPreference === "dark");

  query.onchange = (e) => {
    if (userPreference === "auto") {
      setClass((isDark = e.matches));
    }
  };

  function toggle() {
    setClass((isDark = !isDark));

    userPreference = isDark
      ? query.matches
        ? "auto"
        : "dark"
      : query.matches
      ? "light"
      : "auto";

    localStorage.setItem(APPEARANCE_KEY, userPreference);
  }

  function setClass(dark: boolean): void {
    const css = document.createElement("style");
    css.type = "text/css";
    css.appendChild(
      document.createTextNode(
        `:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`
      )
    );
    document.head.appendChild(css);

    checked.value = dark;
    classList[dark ? "add" : "remove"]("dark");

    // @ts-expect-error keep unused declaration, used to force the browser to redraw
    const _ = window.getComputedStyle(css).opacity;
    document.head.removeChild(css);
  }

  return toggle;
}

watch(checked, (newIsDark) => {
  isDark.value = newIsDark;
});

const dark = computed(() => {
  return isDark.value;
});
</script>

<template>
  <VPSwitch
    class="VPSwitchAppearance"
    :class="{ '[:deep(.check)]:translated-x-[18px]': dark }"
    aria-label="toggle dark mode"
    :aria-checked="checked"
    @click="toggle"
  >
    <VPIconSun
      :class="[dark ? 'opacity-0' : 'opacity-100']"
    />
    <VPIconMoon
      :class="[dark ? 'opacity-100' : 'opacity-0']"
    />
  </VPSwitch>
</template>
