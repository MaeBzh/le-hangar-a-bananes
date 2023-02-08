import { DefaultTheme } from 'vitepress/types/default-theme'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Accueil',
    link: '/index',
    activeMatch: '^/$'
  },
  {
    text: 'Blog',
    link: '/blog/index',
    activeMatch: '/blog/'
  },
  {
    text: 'A propos de nous',
    link: '/about-us/index',
    activeMatch: '/about-us/'
  },
  {
    text: 'Nos outils',
    link: '/tools/index',
    activeMatch: '/tools/'
  },
  {
    text: 'Politique de confidentialité',
    link: '/confidentiality/index',
    activeMatch: '/confidentiality/'
  },
]

export default nav