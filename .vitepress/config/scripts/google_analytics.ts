import { loadEnv } from "vite";
import { HeadConfig } from "vitepress";

const { VITE_GOOGLE_ANALYTICS_ID } = loadEnv("production", process.cwd());
const googleAnalyticsScripts: HeadConfig[] = VITE_GOOGLE_ANALYTICS_ID
  ? [
      [
        "script",
        {
          async: "",
          src: `https://www.googletagmanager.com/gtag/js?id=${VITE_GOOGLE_ANALYTICS_ID}`,
        },
      ],
      ["script", {}, "window.dataLayer = window.dataLayer || [];"],
      ["script", {}, "function gtag(){ dataLayer.push(arguments); }"],
      ["script", {}, "gtag('js', new Date());"],
      ["script", {}, `gtag('config', '${VITE_GOOGLE_ANALYTICS_ID}');`],
    ]
  : [];

export default googleAnalyticsScripts;
