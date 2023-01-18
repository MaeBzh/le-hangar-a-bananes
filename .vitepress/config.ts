import { defineConfig } from "vitepress";
import head from "./config/head";
import themeConfig from "./config/index";

export default defineConfig({
  lang: "fr-FR",
  title: "Le hangar à bananes",
  description:
    "L'histoire de deux bricolos qui construisent leur garage à ossature bois",

  head: [
    ["link", { rel: "icon", href: "/banane.png", type: "image/png" }],
    ...head,
  ],
  srcDir: "src",
  lastUpdated: true,
  themeConfig,
});
