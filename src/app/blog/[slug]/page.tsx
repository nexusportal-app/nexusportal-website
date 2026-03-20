import {getAllPosts, getPostBySlug} from '@/app/blog/postsParser'
import {BlogListItem} from '@/app/blog/BlogListItem'
import {PostPage} from '@/app/blog/[slug]/PostPage'
import {Page} from '@/shared/Page'
import 'github-markdown-css/github-markdown-light.css'
import 'highlight.js/styles/github.css'
import {useTheme} from '@mui/material'

export default async function PostPagePage({params}: {params: {slug: string}}) {
  const {slug} = await params
  const post = await getPostBySlug(slug)

  // const t = useTheme()
  // t.palette.info.lightChannellight
  return (
    <Page component="article" width="sm" sx={{
      '.markdown-alert-note': {
        backgroundColor: 'rgba(2, 136, 209, 0.1)',
      },
      '.markdown-alert-title svg': {
        mr: .5,
      },
      img: {
        boxShadow: 1,
        width: '100%',
        borderRadius: 1,
        mb: 1,
      },
    }}>
      <BlogListItem post={post} />
      <br />
      <PostPage contentHtml={post.contentHtml} />
    </Page>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(p => ({slug: p.slug}))
}
