import {Box} from '@mui/material'
import {BoxProps} from '@mui/material/Box'
import {ElementType, ReactNode} from 'react'

export const saveCardAnimation = {
  '@keyframes saveCardAnimation': {
    '0%': {
      opacity: 0,
      color: 'transparent',
      transform: 'translate(50px, -50px)',
      filter: 'blur(4px)',
    },
    '15%': {
      opacity: 1,
      color: 'black',
      transform: 'translate(0)',
      filter: 'blur(0)',
    },
    '100%': {
      opacity: 1,
      color: 'black',
      transform: 'translate(0)',
      filter: 'blur(0)',
    },
  },
}

export const SaveCard = ({sx, icon: Icon, head, children, ...props}: BoxProps & {
  icon: ElementType
  head?: ReactNode
}) => {
  return (
    <Box
      component="li" sx={{
      p: 1,
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
      <Box sx={{
        // borderBottom: '1px solid',
        // borderColor: 'divider',
      }}>
        {/*<Box sx={{border: '1px solid white', borderTopColor: 'black', borderRadius: 50, background: 'grey', p: 1, display: 'inline-flex', alignItems: 'center'}}>*/}
        {/*</Box>*/}
        <Box component="b" sx={{mb: .5, fontWeight: '500', display: 'block', fontSize: '1.4rem'}}>{head}</Box>
        {children}
        <Border />
      </Box>
    </Box>
  )
}

function Border() {
  return (
    <Box className="SaveCard-border" sx={{
      mt: 2,
      height: '1px',
      width: '100%',
      background: `linear-gradient(90deg, rgba(0, 0, 0, 0.12), white)`,
    }} />
  )
}