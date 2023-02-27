import { defineConfig } from "vite";
import { resolve } from "path";

const componentsDirectory = resolve(
  __dirname,
  "../.vitepress/theme/components"
);
export default defineConfig({
  define: {
    __VUE_PROD_DEVTOOLS__: true
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "../src"),
      "@theme": resolve(__dirname, "../.vitepress/theme"),

      "./VPButton.vue": `${componentsDirectory}/VPButton.vue`,
      "./components/VPContent.vue": `${componentsDirectory}/VPContent.vue`,
      "./VPDoc.vue": `${componentsDirectory}/VPDoc.vue`,
      "./components/VPFooter.vue": `${componentsDirectory}/VPFooter.vue`,
      "./VPHero.vue": `${componentsDirectory}/VPHero.vue`,
      "./VPHome.vue": `${componentsDirectory}/VPHome.vue`,
      "./VPNavbar.vue": `${componentsDirectory}/VPNavbar.vue`,
      "./VPNavBarTitle.vue": `${componentsDirectory}/VPNavBarTitle.vue`,
      "./components/VPSidebar.vue": `${componentsDirectory}/VPSidebar.vue`,
      "./VPSidebarLink.vue": `${componentsDirectory}/VPSidebarLink.vue`,

      "../support/sidebar.js": resolve(__dirname, "../.vitepress/theme/sidebar.js"),
    },
  },
});
