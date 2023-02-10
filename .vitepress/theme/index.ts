import { EnhanceAppContext } from "vitepress";
import { watch } from "vue";
import "./tailwind.postcss";

import DefaultTheme from "vitepress/theme";
import "./custom.css";

import Articles from "./components/Articles.vue";
import Card from "./components/Card.vue";
import Bar from "./components/charts/Bar.vue";
import CTA from "./components/CTA.vue";
import FBPlugins from "./components/FBPlugins.vue";
import Flaticon from "./components/Flaticon.vue";
import HomeStats from "./components/HomeStats.vue";
import Landing from "./components/Landing.vue";
import LastUpdated from "./components/LastUpdated.vue";
import Partners from "./components/Partners.vue";
import Tabs from "./components/Tabs.vue";
import TeamMembers from "./components/TeamMembers.vue";
import Tools from "./components/Tools.vue";
import VPButton from "./components/VPButton.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app
      .component("Articles", Articles)
      .component("Card", Card)
      .component("CTA", CTA)
      .component("Bar", Bar)
      .component("FBPlugins", FBPlugins)
      .component("Flaticon", Flaticon)
      .component("HomeStats", HomeStats)
      .component("Landing", Landing)
      .component("LastUpdated", LastUpdated)
      .component("Partners", Partners)
      .component("Tabs", Tabs)
      .component("TeamMembers", TeamMembers)
      .component("Tools", Tools)
      .component("VPButton", VPButton);

    if (typeof window !== undefined) {
      watch(
        () => ctx.router.route.path,
        (path) => {
          // force facebook to parse content to show plugins
          if ("FB" in window) {
            setTimeout(() => (window as any).FB.XFBML.parse(), 1000);
          }

          // force google_analytics to get metrics
          if ("ga" in window) {
            (window as any).ga("send", "pageview", path);
          }
        }
      );
    }
  },
};
