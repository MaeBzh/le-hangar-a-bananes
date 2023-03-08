import { loadEnv } from "vite";
import { HeadConfig } from "vitepress";

const { VITE_FACEBOOK_PROFIL_ID, VITE_FACEBOOK_APP_ID } = loadEnv("production", process.cwd());
const facebookScripts: HeadConfig[] = [
  [
    "script",
    {},
    `window.FACEBOOK_PROFIL_ID = "${VITE_FACEBOOK_PROFIL_ID}";`,
  ],
  [
    "script",
    {},
    `window.FACEBOOK_APP_ID = "${VITE_FACEBOOK_APP_ID}";`,
  ],
];

export default facebookScripts;
