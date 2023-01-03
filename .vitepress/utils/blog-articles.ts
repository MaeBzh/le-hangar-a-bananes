import dayjs from 'dayjs'
import fg from 'fast-glob'
import matter from 'gray-matter'
import path from 'path'
import { BlogArticle, SidebarBlogArticle } from './../../types.d'

/**
 * Read blog articles folder and return all .md filepaths
 *
 * @returns {string[]}
 */
function getBlogArticleFiles(): string[] {
  const blogFolder = path.resolve(__dirname, '../../src/blog/articles/*.md')
  return fg.sync([blogFolder])
}

/**
 * Resolve blogArticles frontmatter from blog/articles/*.md
 *
 * @returns {BlogArticle[]}
 */
function resolveBlogArticles(): BlogArticle[] {
  const files = getBlogArticleFiles()
  const blogArticles: BlogArticle[] = []

  files.forEach((file) => {
    const { data } = matter.read(file)

    if (data?.published) {
      blogArticles.push({
        ...data,
        date: dayjs(data.date),
        link: `/blog/articles/${path.basename(file)}`
      } as BlogArticle)
    }
  })

  return blogArticles.sort((a, b) => (a.date.isAfter(b.date) ? 1 : -1))
}

export default resolveBlogArticles()
