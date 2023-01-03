import { DefaultTheme } from 'vitepress/types'
import blogArticles from '../utils/blog-articles'
import { fiches } from '../utils/fiches'

const sidebar: DefaultTheme.SidebarMulti = {
  '/blog': [
    {
      text: 'Articles',
      items: blogArticles as []
    }
  ],
  '/fiches': [{ text: 'Fiches', items: fiches }]
}

export default sidebar
