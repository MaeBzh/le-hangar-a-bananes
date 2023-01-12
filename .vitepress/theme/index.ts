import { EnhanceAppContext } from "vitepress";
import "./tailwind.postcss";
import DefaultTheme from "vitepress/theme";
import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
  },
};
