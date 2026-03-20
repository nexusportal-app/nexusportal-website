'use client'

import {Box} from '@mui/material'

export const PostPage = ({contentHtml}: {contentHtml: string}) => {
  return (
    <Box className="markdown-body" sx={{
      fontSize: 17,
      hr: {height: '1px'},
      p: {
        textAlign: 'justify'
      }
    }}>
      <div dangerouslySetInnerHTML={{__html: contentHtml}} />
    </Box>
  )
}
