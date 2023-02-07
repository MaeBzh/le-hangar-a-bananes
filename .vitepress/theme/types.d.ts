import { DefaultTheme } from "vitepress";

export type Partner = {
  title: string;
  image: DefaultTheme.ThemeableImage;
  link: string;
}

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
}