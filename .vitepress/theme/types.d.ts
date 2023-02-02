import { DefaultTheme } from "vitepress";

export type Product = {
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
  date: string;
  link: string;
}