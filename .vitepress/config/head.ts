import { HeadConfig } from "vitepress";
import { loadEnv } from "vite";

const googleAnalyticsScripts = (): HeadConfig[] => {
  const { VITE_GOOGLE_ANALYTICS_ID } = loadEnv("production", process.cwd());
  return VITE_GOOGLE_ANALYTICS_ID
    ? [
        [
          "script",
          {
            async: "",
            src: `https://www.googletagmanager.com/gtag/js?id=${VITE_GOOGLE_ANALYTICS_ID}`,
          },
        ],
        [
          "script",
          {},
          `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${VITE_GOOGLE_ANALYTICS_ID}');`,
        ],
      ]
    : [];
};

const head: HeadConfig[] = [...googleAnalyticsScripts()];

export default head;