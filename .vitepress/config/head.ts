import awinScripts from "./scripts/awin";
import buyMeACoffeeScripts from "./scripts/buymeacoffee";
import googleAnalyticsScripts from "./scripts/google_analytics";
import facebookScripts from "./scripts/facebook";
import cusdisScripts from "./scripts/cusdis";

export default [
  ...googleAnalyticsScripts,
  ...buyMeACoffeeScripts,
  ...awinScripts,
  ...facebookScripts,
  ...cusdisScripts,
];
