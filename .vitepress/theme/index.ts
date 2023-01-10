import { EnhanceAppContext } from "vitepress";
import "./tailwind.postcss";
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import googleAnalytics from "./plugins/google-analytics";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    googleAnalytics({ id: process.env.GOOGLE_ANALYTICS_ID})
  },
};
