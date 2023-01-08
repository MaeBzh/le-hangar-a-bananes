module.exports = {
  darkMode: "class",
  content: [
    "./.vitepress/**/*.js",
    "./.vitepress/**/*.vue",
    "./.vitepress/**/*.ts",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
      "2xl": "1440px",
    },
    boxShadow: {
      // --vp-shadow-1
      sm: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
      // --vp-shadow-2
      DEFAULT: '0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07)',
      // --vp-shadow-3
      md: '0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08)',
      // --vp-shadow-4
      lg: '0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12)',
      // --vp-shadow-5
      xl: '0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16)',
  },
};
