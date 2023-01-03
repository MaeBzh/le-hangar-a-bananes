<script lang="ts" setup>
import { DefaultTheme } from 'vitepress/theme'
import { computed, inject } from 'vue'
import { useData } from 'vitepress'
import { isActive } from 'vitepress/dist/client/theme-default/support/utils'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { SidebarBlogArticle } from '../../../types'
import dayjs from 'dayjs'

withDefaults(
  defineProps<{
    item: DefaultTheme.SidebarItem | SidebarBlogArticle
    depth?: number
  }>(),
  { depth: 1 }
)

const { page, frontmatter } = useData()
const maxDepth = computed<number>(
  () => frontmatter.value.sidebarDepth || Infinity
)
const closeSideBar = inject('close-sidebar') as () => void
</script>

<template>
  <VPLink
    class="link"
    :class="{ active: isActive(page.relativePath, item.link) }"
    :style="{ paddingLeft: 16 * (depth - 1) + 'px' }"
    :href="item.link"
    @click="closeSideBar"
  >
    <p v-if="'date' in item" class="link-date" :class="{ light: depth > 1 }">
      {{ dayjs(item.date).format('DD/MM/YYYY') }}
    </p>
    <p v-if="'title' in item" v-html="item.title" class="link-text" :class="{ light: depth > 1 }"></p>
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
  margin: 4px 0 12px 0;
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

.link-date {
  line-height: 13px;
  font-size: 13px;
  font-weight: 400;
}

.link-text {
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
}

.link-text.light {
  font-size: 13px;
  font-weight: 400;
}
</style>
