<script lang="ts" setup>
import type { SidebarItem } from "../types";
import { Ref, computed, inject, ref, watchEffect } from "vue";
import { useData } from "vitepress";
import { useSidebar } from "vitepress/dist/client/theme-default/composables/sidebar.js";
import { isActive } from "vitepress/dist/client/theme-default/support/utils.js";
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue";

const props = withDefaults(
  defineProps<{ item: SidebarItem; depth?: number }>(),
  { depth: 1 }
);

const { page, frontmatter } = useData();
const maxDepth = computed<number>(
  () => frontmatter.value.sidebarDepth || Infinity
);

const active = computed(() =>
  isActive(page.value.relativePath, props.item.link)
);

const { isSidebarEnabled } = useSidebar();
const closeSideBar = inject("close-sidebar") as () => void;
const isSidebarOpen = inject("is-sidebar-open") as Ref<boolean>;

const date = computed(() => new Date(props.item?.publishedAt));
const isoDatetime = computed(() => date.value.toISOString());
const publishedAt = ref("");

const link = ref<InstanceType<typeof VPLink> | null>(null);
watchEffect(() => {
  if (isSidebarOpen.value && active.value) {
    link.value?.$el?.focus();
  }
  publishedAt.value = date.value.toLocaleDateString(window.navigator.language);
});
</script>

<template>
  <VPButton
    v-if="item.type === 'button'"
    :href="item.link"
    class="text-center w-full"
    style="margin: 4px 0 !important;"
    :aria-label="item.text"
    :text="item.text"
  />

  <VPLink
    v-else
    class="link"
    :class="{ active }"
    :style="{ paddingLeft: 16 * (depth - 1) + 'px' }"
    :href="item.link"
    :tabindex="isSidebarEnabled || isSidebarOpen ? 0 : -1"
    @click="closeSideBar"
    ref="link"
  >
    <small v-if="item.publishedAt" class="item-date">
      <time :datetime="isoDatetime"> {{ publishedAt }}</time>
    </small>
    <p
      v-html="item.text"
      class="link-text"
      :class="{ light: depth > 1, 'mb-4': item.publishedAt }"
    ></p>
  </VPLink>

  <template
    v-if="'items' in item && depth < maxDepth"
    v-for="child in item.items"
    :key="child.link"
  >
    <VPSidebarLink :item="child" :depth="depth + 1" />
  </template>
</template>

<style scoped>
.link {
  display: block;
  margin: 4px 0;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
}

.link:hover {
  color: var(--vp-c-text-1);
}

.link.active {
  color: var(--vp-c-brand);
}

.link :deep(.icon) {
  width: 12px;
  height: 12px;
  fill: currentColor;
}

.link-text {
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
}

.link-date {
  font-size: 12px;
  font-weight: 300;
}

.link-text.light {
  font-size: 13px;
  font-weight: 400;
}
</style>
