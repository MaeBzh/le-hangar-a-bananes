<script setup lang="ts">
import dayjs from 'dayjs'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { theme } = useData()

const lastBlogArticle = computed(() => {
  const sidebarItem = theme.value.sidebar['/blog'][0]
  return sidebarItem.items[0]
})
</script>

<template>
  <a
    rel="noopener noreferrer"
    href="#"
    class="max-w-sm mx-auto group hover:no-underline focus:no-underline"
    style="background-color: var(--vp-c-bg-alt)"
  >
    <img
      role="presentation"
      class="object-cover w-full rounded h-44"
      src="https://source.unsplash.com/random/480x360?1"
    />
    <div class="p-6 space-y-2">
      <h3
        class="text-2xl font-semibold group-hover:underline group-focus:underline"
      >
        {{ lastBlogArticle.title }}
      </h3>
      <span class="text-xs">{{
        dayjs(lastBlogArticle.date).format('DD/MM/YYYY')
      }}</span>
      <p>{{ lastBlogArticle.description }}</p>
    </div>
  </a>
</template>

<style scoped></style>
