import { defineConfig } from "vite";
import { resolve } from "path";

const componentsDirectory = resolve(
  __dirname,
  "../.vitepress/theme/components"
);

export default defineConfig({
  resolve: {
    alias: {
      "@src": resolve(__dirname, "../src"),
      "@theme": resolve(__dirname, "../.vitepress/theme"),

      "./VPDoc.vue": `${componentsDirectory}/VPDoc.vue`,
      "./components/VPFooter.vue": `${componentsDirectory}/VPFooter.vue`,
      "./VPHero.vue": `${componentsDirectory}/VPHero.vue`,
      "./VPTeamMembersItem.vue": `${componentsDirectory}/VPTeamMembersItem.vue`,
    },
  },
});
