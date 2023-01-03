import { Dayjs } from 'dayjs'
import { DefaultTheme } from 'vitepress'

export type BlogArticle = {
  title: string
  description: string
  date: Dayjs
  tags: string[]
  published: boolean
  image: string
  link: string

  [key: string]: any
}

export type SidebarBlogArticle = DefaultTheme.SidebarItem & {
  date: string
}
