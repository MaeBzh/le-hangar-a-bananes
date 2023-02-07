---
layout: home

footer:
  flaticons:
    - author: Kerismaker
      link: https://www.flaticon.com/free-stickers/cabin
---

<script setup>
  import articles from './articles'
</script>

<Articles :articles="articles">
  <template #title>
    <Flaticon :icon="{ src: '/media/home/002-news.png' }" class="w-auto h-64" /> {{ articles.length }} articles
  </template>
</Articles>