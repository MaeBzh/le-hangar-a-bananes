declare module "vitepress/dist/client/theme-default/support/utils" {
  export const isActive: (
    currentPath: any,
    matchPath: any,
    asRegex?: boolean
  ) => boolean;
}

declare module "vitepress/dist/client/theme-default/composables/sidebar" {
  import { ComputedRef, Ref } from "vue";

  export const useSidebar: () => {
    isOpen: Ref<boolean>;
    sidebar: ComputedRef<any>;
    hasSidebar: ComputedRef<boolean>;
    hasAside: ComputedRef<boolean>;
  };
}

declare module "vitepress/dist/client/theme-default/composables/edit-link" {
  import { ComputedRef } from "vue";

  export const useEditLink: () => {
    editLink: ComputedRef<any>;
  };
}

declare module "vitepress/dist/client/theme-default/composables/prev-next" {
  import { ComputedRef } from "vue";

  export const usePrevNext: () => {
    prev: ComputedRef<any>;
    next: ComputedRef<any>;
  };
}
