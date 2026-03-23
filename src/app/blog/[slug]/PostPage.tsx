'use client'

import {Box} from '@mui/material'

export const PostPage = ({contentHtml}: {contentHtml: string}) => {
  return (
    <Box className="markdown-body" sx={{
      fontSize: {lg: 17, md: 16, sm: 14, xs: 13},
      hr: {height: '1px'},
      p: {
        textAlign: 'justify'
      }
    }}>
      <div dangerouslySetInnerHTML={{__html: contentHtml}} />
    </Box>
  )
}
