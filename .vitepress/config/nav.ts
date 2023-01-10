import { DefaultTheme } from 'vitepress/types/default-theme'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Accueil',
    link: '/index',
    activeMatch: '^/$'
  },
  {
    text: 'A propos de nous',
    link: '/about-us/index',
    activeMatch: '/config/'
  },
]

export default nav