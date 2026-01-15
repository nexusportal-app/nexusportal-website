'use client'

export const PostPage = ({contentHtml}: {contentHtml: string}) => {
  return (
    <div dangerouslySetInnerHTML={{__html: contentHtml}} />
  )
}
