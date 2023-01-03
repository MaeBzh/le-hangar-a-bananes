import { defineConfig } from 'vitepress'
import themeConfig from './config/index'

export default defineConfig({
  lang: 'fr-FR',
  title: 'Le hangar à bananes',
  description:
    "L'histoire de deux bricolos qui construisent leur garage à ossature bois",

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css'
      }
    ],
    ['link', { rel: 'icon', href: '/banane.png', type: 'image/png' }]
  ],
  srcDir: 'src',
  lastUpdated: true,

  themeConfig
})
