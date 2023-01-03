import { DefaultTheme } from 'vitepress/types/default-theme'
import { fiches } from '../utils/fiches'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Accueil',
    link: '/index',
    activeMatch: '^/$'
  },
  {
    text: 'Blog',
    link: '/blog/index',
    activeMatch: '^/blog/*'
  },
  {
    text: 'Fiches',
    items: fiches,
    activeMatch: `^/fiches/*`
  },
  {
    text: 'La team Bananes',
    link: '/team/index',
    activeMatch: `^/team/*`
  }
]

export default nav
