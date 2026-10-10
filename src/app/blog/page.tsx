import {getAllPosts} from '@/app/blog/postsParser'
import {BlogListItem} from '@/app/blog/BlogListItem'
import {Page} from '@/shared/Page'
import {Box} from '@mui/material'
import {seq} from '@axanc/ts-utils'

export default async function BlogPage() {
  const posts = await getAllPosts()
  return (
    <Page width="sm" noAnimation>
      <Box
        component="ul"
        sx={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
        }}
      >
        {seq(posts).filter(_ => !_.frontmatter.hidden).sortByString(_ => _.frontmatter.date, 'z-a').map((post, i) => (
          <BlogListItem post={post} key={post.slug} sx={{mb: 2}} animate />
        ))}
      </Box>
    </Page>
  )
}
