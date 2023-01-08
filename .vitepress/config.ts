import { defineConfig } from "vitepress";
import themeConfig from "./config/index";

console.log("themeConfig", themeConfig)

export default defineConfig({
  lang: "fr-FR",
  title: "Le hangar à bananes",
  description:
    "L'histoire de deux bricolos qui construisent leur garage à ossature bois",

  head: [["link", { rel: "icon", href: "/banane.png", type: "image/png" }]],
  srcDir: "src",
  lastUpdated: true,

  themeConfig,
});
