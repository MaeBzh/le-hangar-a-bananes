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
      "./VPDoc.vue": `${componentsDirectory}/VPDoc.vue`,
      "./components/VPFooter": `${componentsDirectory}/VPFooter.vue`,
      "./VPHero.vue": `${componentsDirectory}/VPHero.vue`,
      "./VPTeamMembersItem.vue": `${componentsDirectory}/VPTeamMembersItem.vue`,
    },
  },
});
