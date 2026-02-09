import {headerGradiant} from '@/sections/Header/Header'
import {Box, BoxProps} from '@mui/material'

export const DarkBackground = ({sx, ...props}: BoxProps) => {
  return (
    <Box sx={{
      position: 'relative',
      // py: sectionMargin,
      color: 'white',
      background: headerGradiant,
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(
            rgba(255,255,255,0.04) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255,255,255,0.04) 1px,
            transparent 1px
          )
        `,
        backgroundSize: '22px 22px',
        opacity: 0.4,
      },
      ...sx,
    }} {...props} />
  )
}