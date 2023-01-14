import { HeadConfig } from "vitepress";

const buyMeACoffeeScripts = ({
  VITE_BUYMEACOFFEE_ID,
}: Record<string, string>): HeadConfig[] => {
  return VITE_BUYMEACOFFEE_ID
    ? [
        [
          "script",
          {
            "data-name": "BMC-Widget",
            "data-cfasync": "false",
            src: "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js",
            "data-id": "julienmoulin",
            "data-description": "Support me on Buy me a coffee!",
            "data-message": "",
            "data-color": "#5F7FFF",
            "data-position": "Right",
            "data-x_margin": "18",
            "data-y_margin": "18",
          },
        ],
      ]
    : [];
};

export default buymeacoffeeScripts;
