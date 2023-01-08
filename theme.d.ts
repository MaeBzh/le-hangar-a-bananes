

declare module 'vitepress/dist/client/theme-default/support/utils' {
    export const isActive: (currentPath: any, matchPath: any, asRegex?: boolean) => boolean
  }
  
  declare module 'vitepress/dist/client/theme-default/composables/sidebar' {
    import { ComputedRef, Ref } from "vue";
  
    export const useSidebar: () => {
      isOpen: Ref<boolean>;
      sidebar: ComputedRef<any>;
      hasSidebar: ComputedRef<boolean>;
      hasAside: ComputedRef<boolean>;
    }
  }