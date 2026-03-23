'use client'
import {Post} from '@/app/blog/postsParser'
import {Box, SxProps, Typography, useTheme} from '@mui/material'
import Link from 'next/link'
import {blogListItemHeight} from '@/app/blog/blog.settings'
import {BoxProps} from '@mui/material/Box'

export const BlogListItem = ({
  post,
  onClick,
  animate,
  sx,
}: {
  animate?: boolean
  sx?: SxProps
  onClick?: (e: any) => void
  post: Post
}) => {
  const t = useTheme()
  return (
    <Box
      component="li"
      sx={{
        borderRadius: 1,
        listStyle: 'none',
        transition: t.transitions.create('all'),
        ...animate && {
          p: 1,
          ':hover .BlogListItem-img': {
            boxShadow: 0,
          },
          ':hover': {
            boxShadow: 3,
          },
        },
        ...sx,
      }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Box>
          <Box
            className="BlogListItem-img"
            onClick={onClick}
            sx={{
              borderRadius: 1,
              mb: 1,
              width: '100%',
              aspectRatio: '16 / 9',
              position: 'relative',
              background: `url(${post.frontmatter.coverPath})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: 3,
              transition: t.transitions.create('all'),
            }}
          >
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <div>
              <Typography component="h3" fontSize="1.4em" fontWeight="700">
                {post.frontmatter.title}
              </Typography>
              <Typography color="textSecondary">
                By {post.frontmatter.author.split('--')[0]}
              </Typography>
              <Box sx={{mt: 1}}>
                {post.frontmatter.tags.split(',').map(_ => <Tag key={_}>{_}</Tag>)}
              </Box>
            </div>
          </Box>
        </Box>
      </Link>
    </Box>
  )
}

function Tag({sx, ...props}: BoxProps) {
  return (
    <Box sx={{borderRadius: .25, fontWeight: 500, color: 'text.secondary', display: 'inline-block', py: .25, px: .5, backgroundColor: 'background.paper', ...sx}} {...props} />
  )
}