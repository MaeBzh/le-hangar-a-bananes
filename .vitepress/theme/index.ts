import { EnhanceAppContext } from "vitepress";
import "./tailwind.postcss";

import DefaultTheme from "vitepress/theme";
import "./custom.css";

import Bar from "./components/charts/Bar.vue";
import Card from "./components/Card.vue";
import Flaticon from "./components/Flaticon.vue";
import LastUpdated from "./components/LastUpdated.vue";
import Products from "./components/Products.vue";
import Tabs from "./components/Tabs.vue";
import TeamMembers from "./components/TeamMembers.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app
      .component("Flaticon", Flaticon)
      .component("LastUpdated", LastUpdated)
      .component("Products", Products)
      .component("TeamMembers", TeamMembers)
      .component("Tabs", Tabs)
      .component("Bar", Bar)
      .component("Card", Card);
  },
};
