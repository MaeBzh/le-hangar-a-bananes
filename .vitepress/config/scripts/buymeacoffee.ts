import { loadEnv } from "vite";
import { HeadConfig } from "vitepress";

const { VITE_BUYMEACOFFEE_ID } = loadEnv("production", process.cwd());
const buyMeACoffeeScripts: HeadConfig[] = VITE_BUYMEACOFFEE_ID
  ? [
      [
        "script",
        {
          "data-name": "BMC-Widget",
          "data-cfasync": "false",
          src: "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js",
          "data-id": VITE_BUYMEACOFFEE_ID,
          "data-description": "Support me on Buy me a coffee!",
          "data-message": "",
          "data-color": "#4eafcc",
          "data-position": "Right",
          "data-x_margin": "18",
          "data-y_margin": "18",
        },
      ],
    ]
  : [];

export default buyMeACoffeeScripts;
