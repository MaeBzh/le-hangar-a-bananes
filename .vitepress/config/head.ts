import awinScripts from "./scripts/awin";
import buyMeACoffeeScripts from "./scripts/buymeacoffee";
import googleAnalyticsScripts from "./scripts/google_analytics";
import facebookScripts from "./scripts/facebook";

export default [
  ...googleAnalyticsScripts,
  ...buyMeACoffeeScripts,
  ...awinScripts,
  ...facebookScripts,
];
