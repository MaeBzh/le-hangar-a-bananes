<script setup lang="ts">
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'
import { computed } from 'vue'

const { theme, frontmatter } = useData()
const { hasSidebar } = useSidebar()

const footer = computed(() => ({
  message:
    frontmatter.value?.footer?.message ?? theme.value.footer?.message ?? '',
  copyright:
    frontmatter.value?.footer?.copyright ?? theme.value.footer?.copyright ?? '',
  license:
    frontmatter.value?.footer?.license ?? theme.value.footer?.license ?? ''
}))
</script>

<template>
  <footer
    v-if="footer.message || footer.copyright || footer.license"
    class="VPFooter"
    :class="{ 'has-sidebar': hasSidebar }"
  >
    <div class="container">
      <p v-if="footer.message" class="message" v-html="footer.message"></p>
      <p v-if="footer.copyright" class="copyright" v-html="footer.copyright"></p>
      <p v-if="footer.license" class="license" v-html="footer.license"></p>
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
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.message,
.copyright,
.license {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.license {
  padding-top: 4px;
  line-height: 11px;
  font-size: 11px;
}

.license {
  order: 3;
}
.message {
  order: 2;
}
.copyright {
  order: 1;
}
</style>
