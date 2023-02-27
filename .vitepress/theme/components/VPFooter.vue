<script setup lang="ts">
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'
import { computed } from 'vue'

const { theme, frontmatter } = useData()
const { hasSidebar } = useSidebar()

const message = computed(() => {
  return frontmatter.value?.footer?.message ?? theme.value.footer?.message ?? '';
})

const copyright = computed(() => {
  return frontmatter.value?.footer?.copyright ?? theme.value.footer?.copyright ?? '';
})

const flaticons = computed(() => {
  const flaticons = frontmatter.value?.footer?.flaticons ?? theme.value.footer?.flaticons ?? [];
  let text = '';
  
  if (flaticons.length > 0) {
    text = 'Icons made by ';
    flaticons.forEach((flaticon, index) => {
      text += `<a href="${flaticon.link}" title="${flaticon.author}">${flaticon.author}</a>`;
      if (index < flaticons.length - 1) {
        text += ', ';
      }
    });
    text += ' from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>';
  }

  return text;
})
</script>

<template>
  <footer
    v-if="message || copyright || flaticons"
    class="VPFooter"
    :class="{ 'has-sidebar': hasSidebar }"
  >
    <div class="container">
      <p v-if="message" class="message" v-html="message"></p>
      <p v-if="copyright" class="copyright" v-html="copyright"></p>
      <p v-if="flaticons" class="flaticons" v-html="flaticons"></p>
    </div>
  </footer>
</template>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-divider-light);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

@media (min-width: 768px) {
  .VPFooter {
    padding: 16px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.message,
.copyright,
.flaticons {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.flaticons {
  padding-top: 4px;
  line-height: 11px;
  font-size: 11px;
}

.flaticons {
  order: 3;
}
.message {
  order: 2;
}
.copyright {
  order: 1;
}
</style>