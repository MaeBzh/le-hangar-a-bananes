import { defineConfig } from "vite";
import { resolve } from "path";
import ssr from "vite-plugin-ssr/plugin";

const componentsDirectory = resolve(
  __dirname,
  "../.vitepress/theme/components"
);

export default defineConfig({
//   plugins: [ssr()],
  resolve: {
    alias: {
      "./VPHero.vue": `${componentsDirectory}/VPHero.vue`,
      "./VPButton.vue": `${componentsDirectory}/VPButton.vue`,
    },
  },
});
