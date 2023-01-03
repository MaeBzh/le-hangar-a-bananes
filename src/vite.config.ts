import { defineConfig } from 'vite'
import { resolve } from 'path'

const componentsDirectory = resolve(__dirname, '../.vitepress/theme/components')

export default defineConfig({
  resolve: {
    alias: {
      './components/VPFooter.vue': `${componentsDirectory}/VPFooter.vue`,
      './VPDoc.vue': `${componentsDirectory}/VPDoc.vue`,
      './VPHero.vue': `${componentsDirectory}/VPHero.vue`,
      './VPSidebarLink.vue': `${componentsDirectory}/VPSidebarLink.vue`,
    }
  }
})
