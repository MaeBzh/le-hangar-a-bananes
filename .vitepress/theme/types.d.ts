import { DefaultTheme } from "vitepress";

export type Partner = {
  title: string;
  image: DefaultTheme.ThemeableImage;
  link: string;
};

export type Tool = {
  title: string;
  stars: number;
  description: string;
  btn?: {
    href: string;
    text: string;
  };
  image: DefaultTheme.ThemeableImage;
};

export type Article = {
  title: string;
  description: string;
  publishedAt: Date;
  link: string;
  image?: DefaultTheme.ThemeableImage;
};

export interface SidebarMulti {
  [path: string]: SidebarGroup[];
}

export interface SidebarGroup {
  text?: string;
  items: SidebarItem[];

  /**
   * If `true`, toggle button is shown.
   *
   * @default false
   */
  collapsible?: boolean;

  /**
   * If `true`, collapsible group is collapsed by default.
   *
   * @default false
   */
  collapsed?: boolean;
}

export type SidebarItem = {
  text: string;
  type?: "button" | "link";
  link?: string;
  title?: string;
  image?: DefaultTheme.ThemeableImage;
  publishedAt?: Date;
  items?: SidebarItem[];
};
