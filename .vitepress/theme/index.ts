import { EnhanceAppContext } from "vitepress";
import "./tailwind.postcss";

import DefaultTheme from "vitepress/theme";
import "./custom.css";

import Flaticon from "./components/Flaticon.vue";
import LastUpdated from "./components/LastUpdated.vue";
import Products from "./components/Products.vue";
import TeamMembers from "./components/TeamMembers.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app
      .component("Flaticon", Flaticon)
      .component("LastUpdated", LastUpdated)
      .component("Products", Products)
      .component("TeamMembers", TeamMembers);
  },
};
