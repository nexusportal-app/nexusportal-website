import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import remarkGithubAlerts from 'remark-github-blockquote-alert'


const postsDirectory = path.join(process.cwd(), 'src/posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export type Post = {
  slug: string
  frontmatter: {
    date: string
    title: string
    coverPath: string
    tags: string
    author: string
  }
  contentHtml: string
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const {data, content} = matter(fileContents)

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkGithubAlerts)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content)

  const contentHtml = processedContent.toString()

  return {
    slug: realSlug,
    frontmatter: data as any,
    contentHtml,
  }
}

export async function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)))

  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}
