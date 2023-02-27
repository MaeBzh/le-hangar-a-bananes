import { loadEnv } from "vite";
import { HeadConfig } from "vitepress";

const { VITE_CUSDIS_APP_ID } = loadEnv("production", process.cwd());
const cusdisScripts: HeadConfig[] = [
  [
    "script",
    {
      defer: "",
      src: "https://cusdis.com/js/widget/lang/fr.js",
    },
  ],
  [
    "script",
    {
      defer: "",
      "data-host": "https://cusdis.com",
      "data-app-id": VITE_CUSDIS_APP_ID,
      src: "https://cusdis.com/js/cusdis-count.umd.js",
    },
  ],
  ["script", {}, `window.CUSDIS_APP_ID = "${VITE_CUSDIS_APP_ID}";`],
];

export default cusdisScripts;
