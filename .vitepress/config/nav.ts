import { DefaultTheme } from 'vitepress/types/default-theme'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Accueil',
    link: '/index',
    activeMatch: '^/$'
  },
]

export default nav