import { EnhanceAppContext } from "vitepress";
import "./tailwind.postcss";

import DefaultTheme from "vitepress/theme";
import "./custom.css";

import Articles from "./components/Articles.vue";
import Card from "./components/Card.vue";
import Bar from "./components/charts/Bar.vue";
import Flaticon from "./components/Flaticon.vue";
import HomeStats from "./components/HomeStats.vue";
import Landing from "./components/Landing.vue";
import LastUpdated from "./components/LastUpdated.vue";
import Partners from "./components/Partners.vue";
import Tabs from "./components/Tabs.vue";
import TeamMembers from "./components/TeamMembers.vue";
import Tools from "./components/Tools.vue";
import VPButton from "./components/VPButton.vue";
import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app
      .component("Articles", Articles)
      .component("Card", Card)
      .component("Bar", Bar)
      .component("Flaticon", Flaticon)
      .component("HomeStats", HomeStats)
      .component("Landing", Landing)
      .component("LastUpdated", LastUpdated)
      .component("Partners", Partners)
      .component("Tabs", Tabs)
      .component("TeamMembers", TeamMembers)
      .component("Tools", Tools)
      .component("VPButton", VPButton);
  },
};
