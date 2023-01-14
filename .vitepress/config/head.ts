import { loadEnv } from "vite";
import buyMeACoffeeScripts from "./scripts/buymeacoffee";
import googleAnalyticsScripts from "./scripts/google_analytics";

const envs = loadEnv("production", process.cwd());

export default [...googleAnalyticsScripts(envs), buyMeACoffeeScripts(envs)];
