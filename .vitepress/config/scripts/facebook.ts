import { loadEnv } from "vite";
import { HeadConfig } from "vitepress";

const { VITE_FACEBOOK_APP_ID } = loadEnv("production", process.cwd());
const facebookScripts: HeadConfig[] = [
  [
    "script",
    {
      defer: "",
      async: "",
      crossOrigin: "anonymous",
      src: `https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v16.0&appId=${VITE_FACEBOOK_APP_ID}&autoLogAppEvents=1`,
    },
  ],
];

export default facebookScripts;
