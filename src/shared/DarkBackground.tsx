import {headerGradiant} from '@/sections/Header/Header'
import {Box, BoxProps} from '@mui/material'

export const DarkBackground = ({sx, ...props}: BoxProps) => {
  return (
    <Box sx={{
      position: 'relative',
      // py: sectionMargin,
      color: 'white',
      background: `
        radial-gradient(circle at 12% 18%,
          rgba(5,18,42,0.45) 0%,
          rgba(3,12,30,0.4) 28%,
          rgba(1,6,14,0.7) 55%,
          rgba(2,9,22,0.35) 75%,
          rgba(1,6,14,0.6) 100%
        ),
        radial-gradient(circle at 62% 14%,
          rgba(6,22,48,0.42) 0%,
          rgba(4,14,34,0.36) 30%,
          rgba(1,6,14,0.75) 58%,
          rgba(3,10,26,0.32) 80%,
          rgba(1,6,14,0.6) 100%
        ),
        radial-gradient(circle at 28% 68%,
          rgba(6,20,46,0.42) 0%,
          rgba(3,13,32,0.36) 30%,
          rgba(1,6,14,0.75) 58%,
          rgba(2,10,24,0.32) 80%,
          rgba(1,6,14,0.6) 100%
        ),
        radial-gradient(circle at 78% 78%,
          rgba(7,24,52,0.38) 0%,
          rgba(4,15,38,0.34) 32%,
          rgba(1,6,14,0.8) 60%,
          rgba(3,12,28,0.3) 82%,
          rgba(1,6,14,0.6) 100%
        )
      `,
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        // backgroundImage: 'repeating-linear-gradient(0deg, #0a1220, #0a1220 1px, #030509 1px, #030509)',
        // backgroundSize: '3px 3px',
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
        backgroundSize: '8px 8px',
        opacity: 0.4,

      },
      ...sx,
    }} {...props} />
  )
}