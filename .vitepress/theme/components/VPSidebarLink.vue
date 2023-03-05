<script lang="ts" setup>
import type { SidebarItem } from "../types";
import { Ref, computed, inject, ref, watchEffect } from "vue";
import { useData } from "vitepress";
import { useSidebar } from "vitepress/dist/client/theme-default/composables/sidebar.js";
import { isActive } from "vitepress/dist/client/theme-default/support/utils.js";
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue";
import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";

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
    style="margin: 4px 0 !important"
    :aria-label="item.text"
    :text="item.text"
  />

  <div
    v-else-if="item.publishedAt"
    class="border border-gray-200 rounded-sm p-4 mt-4"
  >
    <VPLink
      :class="{ active }"
      :href="item.link"
      @click="closeSideBar"
      ref="link"
      :tabindex="isSidebarEnabled || isSidebarOpen ? 0 : -1"
    >
      <VPImage :image="item.image" class="object-scale-down rounded-sm mr-2" />
      <small v-if="item.publishedAt" class="item-date">
        <time :datetime="isoDatetime"> {{ publishedAt }}</time>
      </small>
      <p v-html="item.title" class="text-sm font-medium mb-1"></p>
      <p v-html="item.text" class="text-xs font-light"></p>
    </VPLink>
  </div>

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
    <p v-html="item.text" class="link-text" :class="{ light: depth > 1 }"></p>
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
  color: var(--vp-c-text-1);
  transition: color 0.5s;
}

.link:hover {
  color: var(--vp-c-text-2);
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
