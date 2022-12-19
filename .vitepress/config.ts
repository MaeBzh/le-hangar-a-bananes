import { defineConfigWithTheme } from 'vitepress'
import {
  Config as ThemeConfig,
  SidebarGroup,
  MultiSidebarConfig,
  NavItem
} from 'vitepress-theme-vue'
import baseConfig from 'vitepress-theme-vue/config'

const presentation = [
  { text: 'Le projet', link: '/blog/articles/presentation' },
  { text: 'L\'élaboration du projet', link: '/blog/articles/development' },
]

const construction = [
  { text: 'Le terrassement', link: '/blog/articles/grading' },
  { text: 'Les fondations', link: '/blog/articles/foundations' },
]

const cards = [
  { text: 'Permis de construire', link: '/blog/cards/building-permit' },
  { text: 'Une autre fiche', link: '/blog/cards/another-card' }
]

const blogSidebar: SidebarGroup[] = [
  { text: 'Articles', items:  presentation},
  { text: 'Fiches', items: cards }
]

const sidebar: MultiSidebarConfig = {
  '/blog': blogSidebar
}

const nav: NavItem[] = [
  {
    text: 'Articles',
    items: [
      { text: 'Présentation du projet', items: presentation },
      { text: 'La construction', items: construction }
    ],
    activeMatch: `^/articles/`
  },
  {
    text: 'Fiches',
    items: cards
  }
]

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  lang: 'fr-FR',
  title: 'Le hangar à bananes',
  description: 'L\'histoire de deux bricolos qui construisent leur garage à ossature bois',
  head: [
    ['link', { rel: 'icon', href: '/banane.png', type: 'image/png' }]
  ],
  srcDir: 'docs',
  lastUpdated: true,
  themeConfig: {
    navLogo: '/banane.png',
    socialLinks: [
      {
        icon: 'facebook',
        link: 'https://www.facebook.com/profile.php?id=100088975922675'
      }
    ],
    nav,
    sidebar
  }
})
