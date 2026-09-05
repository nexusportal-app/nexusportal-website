import {Box} from '@mui/material'
import {BoxProps} from '@mui/material/Box'
import {ElementType, ReactNode} from 'react'
import {Paragraph} from '@/shared/Paragraph'

export const SaveCard = ({sx, icon: Icon, head, children, ...props}: BoxProps & {
  icon: ElementType
  head?: ReactNode
}) => {
  return (
    <Box
      component="li" sx={{
      p: {xs: .25, sm: 1},
      pl: {xs: 0, sm: 1},
      flex: 1,
      display: 'flex',
      borderRadius: .25,
      // backgroundColor: 'background.paper',
      // boxShadow: 1,
      fontSize: '1rem',
      animationName: 'saveCardAnimation',
      animationDuration: '0.6s',
      animationTimingFunction: 'ease-out',
      animationFillMode: 'forwards',
      animationTimeline: 'view()',

      '&:last-of-type': {
        pb: 0,
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        '& .SaveCard-border': {
          display: 'none',
        },
      },
      '&:first-of-type': {
        pt: 0,
        borderTopRightRadius: '20px',
        borderTopLeftRadius: '20px',
      },
      // '&:last-of-type': {
      //   borderTopRightRadius: '20px',
      //   borderBottomRightRadius: '20px',
      // },
      // '&:first-of-type': {
      //   borderTopLeftRadius: '20px',
      //   borderBottomLeftRadius: '20px',
      // },
      ...sx,
    }}
      {...props}
    >
      <Icon sx={{fontSize: '2.4rem', mr: 1, color: 'primary.main'}} />
      <Box>
        <Paragraph component="h4" size="big" sx={{m: 0, mb: .5, fontWeight: '500', display: 'block'}}>{head}</Paragraph>
        <Paragraph
          dangerouslySetInnerHTML={{__html: children as string}}
          sx={{
            fontWeight: '500',
          }} />
        <Border />
      </Box>
    </Box>
  )
}

function Border() {
  return (
    <Box className="SaveCard-border" sx={{
      mt: {xs: 1, sm: 2},
      height: '1px',
      width: '100%',
      background: `linear-gradient(90deg, rgba(0, 0, 0, 0.12), white)`,
    }} />
  )
}