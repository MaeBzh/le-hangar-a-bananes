declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;

  export default component;
}

declare module 'vitepress/dist/client/shared.js' {
  export const APPEARANCE_KEY: string;
}