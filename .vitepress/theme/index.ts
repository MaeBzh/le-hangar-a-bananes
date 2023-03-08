import { EnhanceAppContext } from "vitepress";
import "./tailwind.postcss";

import DefaultTheme from "vitepress/theme";
import "./custom.css";

import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";
import Articles from "./components/Articles.vue";
import Card from "./components/Card.vue";
import Carousel from "./components/Carousel.vue";
import Bar from "./components/charts/Bar.vue";
import Comments from "./components/Comments.vue";
import CTA from "./components/CTA.vue";
import FBShareButton from "./components/FBShareButton.vue";
import Flaticon from "./components/Flaticon.vue";
import HomeStats from "./components/HomeStats.vue";
import Image from "./components/Image.vue";
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
      .component("Image", Image)
      .component("Card", Card)
      .component("Carousel", Carousel)
      .component("Comments", Comments)
      .component("CTA", CTA)
      .component("Bar", Bar)
      .component("FBShareButton", FBShareButton)
      .component("Flaticon", Flaticon)
      .component("HomeStats", HomeStats)
      .component("Landing", Landing)
      .component("LastUpdated", LastUpdated)
      .component("Partners", Partners)
      .component("Tabs", Tabs)
      .component("TeamMembers", TeamMembers)
      .component("Tools", Tools)
      .component("VPButton", VPButton)
      .component("VPImage", VPImage);
  },
};
